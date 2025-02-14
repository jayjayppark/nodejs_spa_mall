// const mongoose = require("mongoose");
import mongoose from "mongoose";

const goodsSchema = new mongoose.Schema({
    goodsId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    thumbnailUrl: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    }
});

// module.exports = mongoose.model("Goods", goodsSchema);
export default mongoose.model("Goods", goodsSchema);