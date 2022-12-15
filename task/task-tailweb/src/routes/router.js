const express =require("express")
const router=express.Router()
const signupController=require("../controller/signUpController")
const loginController=require("../controller/loginController")


router.post("/user/register",signupController.signupUser)

router.post("/logInuser",loginController.login)

router.all("/*", function (req, res) {
  res.status(404).send({
    status: false,
    message: "Make Sure Your Endpoint is Correct !!!",
  });
});

module.exports=router