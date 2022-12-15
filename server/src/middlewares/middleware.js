//write middleware here
const jwt = require("jsonwebtoken");
const Blacklist = require("../model/blacklist.model");
const token_secret = process.env.TOKEN_KEY;

const verifyToken = async function (req, res, next) {
  console.log(req.cookies)
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  let sp = await Blacklist.findOne({ token });
  if (sp) {
    return res
      .status(401)
      .send({ status: false, message: "user logouted already" });
  }

  try {
    const verification = await jwt.verify(token, token_secret);
    if (verification) {
      req.userId = verification.id;
      req.role = verification.role;
      next();
    } else {
      res.status(401).send("Operation not allowed.");
    }
  } catch (e) {
    return res.send(e.message);
  }
};

module.exports = verifyToken;
