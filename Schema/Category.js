const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("category", categorySchema);
