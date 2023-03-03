require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParse = require("body-parser")
const router = require("./router/router")
const port = process.env.PORT || 3000
const MongoDbUrl=process.env.DataBaseUrl
const app = express()

app.use(bodyParse.json())

mongoose.connect(MongoDbUrl, {

})
    .then(() => { console.log("MongoDb is connected successfully.....") })
    .catch((Err) => { console.log(Err) })
app.use("/", router)

app.listen(port, function () {
    console.log(`server is connected on port ${port} `)
})