//write utils here
require("dotenv").config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport=require("passport");


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SCERET,
    callbackURL: "http://localhost:8179/user/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {

    //creating new user
    let email=profile._json.email
    let payload={
        email,
        url:profile._json.picture

    }
      return cb(null, payload);
    // console.log(payload)
    
    // console.log(profile);
  }
));

module.exports=passport