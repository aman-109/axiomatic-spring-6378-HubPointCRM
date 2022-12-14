const User = require("../model/user.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

//Helper functions
const createUser = async (data) => {
  let already_exist = await User.findOne({ email: data.email });
  if (already_exist) {
    return false;
  }
  let hash = await argon2.hash(data.password);
  let user = await User.create({ ...data, password: hash });
  if (user) {
    return true;
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

// Route Callback functions
const getUser = async (req, res) => {
  res.send("Hello server started ");
};

// 1. Signup callback
const signupUser = async (req, res) => {
  let data = req.body;
  let user = await createUser({ ...data });
  if (user) {
    return res.send({ status: true, messege: "user created successfully" });
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

    return res.send({ status: true, token, refreshToken });
  } else {
    return res.send({ status: false, messege: "something went wrong" });
  }
};

module.exports = { getUser, signupUser, loginUser };
