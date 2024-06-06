// const mongoose = require("mongoose");
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  goodsId: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

// module.exports = mongoose.model("Cart", cartSchema);
export default mongoose.model("Cart", cartSchema); // index.js에서 연결한 spa_mall db에서 cart collection에 연결하는듯?