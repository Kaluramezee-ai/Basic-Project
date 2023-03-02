const mongoose = require("mongoose")

const moviesSchema = mongoose.Schema({
    id: {
        type: Number, required: true
    },
    movie: {
        type: String, required: true
    }
},{timestamps:true})

module.exports =mongoose.model("movie",moviesSchema)