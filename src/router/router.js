const express = require("express")
const userController=require("../controller/userController")
const movieController=require("../controller/moviesController")
const Router = express.Router()

Router.get("/apiTesting", function (req, res) {
    res.send("Hello Kaluram i am tesing api's")
})

Router.get("/candidates",function(req,res){
    let arr=["Kaluram","ezee-ai","Ravindra","Mahesh"]
    let data=req.query
    let gender=req.query.gendar
    let state=req.query.state
    let district=req.query.district
    console.log(gender ,state, district)
    console.log("this is query params for filtering datas",JSON.stringify(data))
    res.send(arr)
})
Router.get("/candidate/:Canadiatesname",function(req,res){
    let name =req.params
    console.log("path Params candidate name is ",name.Canadiatesname)
    res.send("Done")
})
Router.post("/test-post",function(req,res){
    let data=req.body
    console.log(data)
    res.send([1,2,3,4,5,6,7,7,8])
})
Router.post("/addArray",function(req,res){
    let arr=[1,3,4,5,"kaluram",false,null,34,"ram"]
   let arr1= arr.push(req.body.arr5)
   console.log(arr.flat(Infinity))
})
Router.post("/movies",movieController.moviesData)
Router.get("/movies/:indexNumber",movieController.movieDataGet)
Router.post("/user",userController.userData)

module.exports = Router