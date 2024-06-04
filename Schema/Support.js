const mongoose = require("mongoose")
const { Schema } = mongoose

const supportSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    ticketId: {
        type: String
    },
    status: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    createAt:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Support", supportSchema)