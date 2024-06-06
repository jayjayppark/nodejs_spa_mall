// const express = require('express');
// const goodsRouter = require("./routes/goods");
// const connect = require("./schemas");
import express from 'express';
import goodsRouter from "./routes/goods.js";
// 이 구문이 실행되면, ./schemas/index.js 파일의 모든 코드가 한 번 실행됩니다. 모듈의 최상위 레벨 코드가 실행되고, 모듈에서 내보낸 connect 함수가 현재 파일로 가져와집니다.
import connect from "./schemas/index.js";

connect();

const app = express();
const port = 3000;

// JSON 요청 본문을 처리하는 미들웨어
app.use(express.json());
// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter]);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});