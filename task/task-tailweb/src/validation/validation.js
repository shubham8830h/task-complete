const mongoose = require("mongoose");

const isValid = (value) => {
  if (typeof value === "undefined" || typeof value === "null") return true;
  if (typeof value === "string" && value.trim().length != 0) return true;
  if (typeof value === "object" && Object.keys(value).length == 0) return true;

  return false;
};

const isValidId = function (id) {
  return mongoose.Types.ObjectId.isValid(id);
};

const isValidName = function (name) {
  if (/^[a-z ,.'-]+$/i.test(name)) return true;
  return false;
};

const isValidBody = (reqBody) => {
  return Object.keys(reqBody).length == 0;
};

const isValidPhone = (Mobile) => {
  return /^[6-9]\d{9}$/.test(Mobile);
};

const isValidMarks = (Marks) => {
  if (Marks > 100 || Marks < 0) return false;
  return /^[0-9]\d$/.test(Marks);
};

const isValidEmail = (Email) => {
  return /^([A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6})+$/.test(Email);
};

const isValidPwd = (Password) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(
    Password
  );
};

const isValidPincode = (num) => {
  return /^[1-9][0-9]{5}$/.test(num);
};


module.exports = {
 isValid,
    isValidName,
    isValidPhone,
    isValidEmail,
    isValidPwd,
    isValidPincode,
    isValidId,
    isValidBody,
    isValidMarks,
};

   