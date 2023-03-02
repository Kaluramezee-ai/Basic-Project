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

Router.post("/movies",movieController.moviesData)
Router.get("/movies/:indexNumber",movieController.movieDataGet)
Router.post("/user",userController.userData)

module.exports = Router