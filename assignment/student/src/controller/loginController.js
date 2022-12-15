const loginModel=require("../model/loginModel")
const signupModel=require("../model/signupModel")
const validation =require("../validation/validation")

const login=async function(req,res){
    try{
      let data =req.body
      let {firstName, lastName,password} =data

      let checkUser=await signupModel.find({firstName:firstName,lastName:lastName,password:password})

      if(checkUser){
        let createLogin=await loginModel.create(data)
        return res.status(200).send({status:true, message:"login successfull"})
      }else{
        res.status(400).send({status:false,message:"please signup first"})
      }

    }catch (err){
       res.status(500).send({status:false, message:err.message})
    }
}

module.exports={login}