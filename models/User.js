const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, lowercase: true, required: true },
        fullName: { type: String, required: true },
        password: { type: String, select: false, required: true },
    },
    { timestamps: true, versionKey: false }
)

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt, null)

        this.password = hashedPassword
        next()
    } catch (err) {
        return next(err)
    }
})

UserSchema.statics.comparePassword = async (password, receivedPassword) =>
    await bcrypt.compare(password, receivedPassword)

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
