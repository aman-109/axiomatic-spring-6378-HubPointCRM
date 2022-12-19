const User = require("../model/user.model");
const Blacklist = require("../model/blacklist.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const { generateOTP } = require("../utils/otp");
const { sendMail } = require("../utils/mail");

const token_secret = process.env.TOKEN_KEY;
const refreshToken_secret = process.env.REFRESHTOKEN_KEY;

//Helper functions
const createUser = async (data) => {
 
  let hash = await argon2.hash(data.password);
  const otpGenerate=generateOTP()
  let user = await User.create({ ...data, password: hash,otp:otpGenerate });
  if (!user) {
    console.log("first")
    return false;
  } 
  try{
    await sendMail({
      to: data.email,
      OTP: otpGenerate,
    })
    return true
  }
  catch(e){
    console.log("second")
    return false
  }
};

const findUser = async (data) => {
  let user = await User.findOne({ ...data });
  if (user) {
    return user;
  } else {
    return false;
  }
};

const validateUser = async (data) => {
  let { email, password } = data;
  try {
    let user = await findUser({ email });
    
    if (user) {
      if (await argon2.verify(user.password, password)) {
        return user;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};



const validateWithOtp = async (email, otp) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    return false;
  }
  if (user && user.otp !== otp) {
    return false;
  }
  return true
};


// Route Callback functions
const getUser = async (req, res) => {
  res.send("Hello server started ");
};

// 1. Signup callback
const signupUser = async (req, res) => {
  let data = req.body;
  let already_exist = await User.findOne({ email: data.email });
  if (already_exist) {
    return res.send({status:false,message:"user already registered"});
  }

  let user = await createUser({ ...data });
  if (user) {
    return res.send({ status: true,user:data.email, messege: "user created successfully" });
  } else {
    return res.send({ status: false, messege: "wrong details" });
  }
};

// 2. Login callback
const loginUser = async (req, res) => {
  let { email, password } = req.body;
  let user = await validateUser({ email, password });

  if (user) {
    let token = jwt.sign(
      { email: user.email, name: user.name, role: user.role },
      token_secret,
      {
        expiresIn: "7 days",
      }
    );

    let refreshToken = jwt.sign(
      { email: user.email, name: user.name, role: user.role },
      refreshToken_secret,
      { expiresIn: "28 days" }
    );
     res.status(200).cookie("token", token,{httpOnly:false,sameSite:"None",secure:true})
     .cookie("refreshToken",refreshToken,{httpOnly:false,sameSite:"None",secure:true})
     .send({ status: true, token, refreshToken });
  } else {
    return res.send({ status: false, messege: "something went wrong" });
  }
};

//3. Logout callback
const logoutUser = async (req, res) => {
  let token = req.headers.authorization;
  try {
    let tok = await Blacklist.create({ token });
    res
      .status(200)
      .send({ status: true, message: "user logouted successfully" });
  } catch (e) {
    res.status(401).send({ message: e.message });
  }
};

//4. Refresh Token callback
const getRefreshToken = async (req, res) => {  
  let token = req.cookies.refreshToken
  let sp = await Blacklist.findOne({ token });
  if (sp) {
    return res.status(401).send({ status: false, message: "user logouted" });
  }
  try {
    let veri = jwt.verify(token, refreshToken_secret);
    if (veri) {
      let user = await findUser({ email: veri.email });
      if (user) {
        let new_token = jwt.sign(
          { email: user.email, role: user.role, name: user.name },
          token_secret,
          {
            expiresIn: "7 day",
          }
        );
        
        return res.status(200).cookie("token",new_token,{httpOnly:false,sameSite:"None",secure:true}).cookie("refreshToken",token,{httpOnly:false,sameSite:"None",secure:true}).send({
          status: true,
          token: new_token,
          refreshToken: token,
        });
      } else {
        return res.status(401).send({
          status: false,
          message: "user not found",
        });
      }
    }
  } catch (e) {
    return res.status(401).send({
      status: false,
      message: e.message,
    });
  }
};


// 5. Verify Email with otp
const verifyEmail=async (req, res) => {
  const { email, otp } = req.body;
  const user = await validateWithOtp(email, otp);
  if(user){

    res.send({status:user,message:"user verified successfully"});
  }else{
    
    res.send({status:false,message:"otp is invalid"});
  }
};


//6. forget password
const forgetPassword=async(req,res)=>{
  const {email,password}=req.body;
 const user= await User.findOne({ email});
 if(!user){
  return res.send("user not found !")
}
if(user && !password ){
 return res.send("Please Enter New Password")

 }
 let hash = await argon2.hash(password);
 await User.findByIdAndUpdate(user._id, {
  $set: { password: hash },
},{new:true});

return res.send({message:"password updated successfully"})
}

module.exports = {
  getUser,
  signupUser,
  loginUser,
  logoutUser,
  getRefreshToken,
  verifyEmail,
  forgetPassword
};
