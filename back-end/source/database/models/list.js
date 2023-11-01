const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    score: {
        type: Number,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    episodes: {
        type: Number,
        required: true,
        trim: true,
    },
    image_url: {
        type: String,
        required: true,
        trim: true,
    },
    mal_id: {
        type: Number,
        required: true,
        trim: true,
    }
})

module.exports = mongoose.model("List", listSchema)