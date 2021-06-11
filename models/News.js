'use strict'
const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, 'Debe añadir el titulo'] },
        img: { type: String, required: [true, 'Debe añadir la imágen'] },
        description: { type: String, required: [true, 'Debe añadir una descripción'] },
        author: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.models.News || mongoose.model('News', NewsSchema)
