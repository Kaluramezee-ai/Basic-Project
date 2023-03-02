const userModel=require("../module/usermodel")
const userData= async function (req,res){
    let data=req.body
    let createData=await userModel.create(data)
 
}
module.exports={userData}