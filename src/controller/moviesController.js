
const moviesModel = require("../module/moviesModel")
const moviesData = async function (req, res) {
    let data = req.body

    let movies = await moviesModel.create(data)
    
    res.send(movies)
}
const movieDataGet = async function (req, res) {
    let data = req.params
    let movies = await moviesModel.findOne({ id: data.indexNumber })
    if (movies == null) {
        res.send("use a valid in an error message")
    }
    console.log(movies)
    res.send(movies)
}
module.exports = { moviesData, movieDataGet }