// const mongoose = require("mongoose");
import mongoose from "mongoose";

const connect = () => {
    mongoose
        .connect("mongodb://localhost:27017/spa_mall") // spa_mall데이터베이스에 연결
        .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
    console.error("몽고디비 연결 에러", err);
});

// module.exports = connect;
export default connect;