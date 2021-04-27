'use strict'
const mongoose = require('mongoose')

const MainSlideSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, 'Debe añadir el titulo'] },
        img: { type: String, required: [true, 'Debe añadir la imágen'] },
        urlToGo: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.models.MainSlide || mongoose.model('MainSlide', MainSlideSchema)
