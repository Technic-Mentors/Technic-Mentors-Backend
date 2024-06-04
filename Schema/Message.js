const mongoose = require("mongoose")
const { Schema } = mongoose

const messageSchema = new Schema({
    message: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Support"
    },
    status: {
        type: String
    },
    messageStatus: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Message", messageSchema)