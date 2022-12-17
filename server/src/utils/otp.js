const otpGenerator = require('otp-generator');

const OTP_LENGTH =7

const OTP_CONFIG= {
    upperCaseAlphabets: true,
    specialChars: false,
  }

module.exports.generateOTP = () => {
  const OTP = otpGenerator.generate(OTP_LENGTH, OTP_CONFIG);
  return OTP;
};


