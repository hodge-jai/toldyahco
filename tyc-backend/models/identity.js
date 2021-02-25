const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tag: { type: String, required: true },
  description: { type: String, required: true}
});

const identitySchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  publicKey: { type: String, required: true },
  tags: { type: [tagSchema], required: true }
});

const Identity = mongoose.model("Identity", identitySchema);
module.exports = Identity;
