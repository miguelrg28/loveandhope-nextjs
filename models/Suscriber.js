'use strict'
const mongoose = require('mongoose')

const SuscriberSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true },
    },
    { timestamps: true, versionKey: false }
)

module.exports = mongoose.models.Suscriber || mongoose.model('Suscriber', SuscriberSchema)
