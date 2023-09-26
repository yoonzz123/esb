// loaders/express.js
import express from 'express'
import path from 'path'
//import cookieParser from 'cookie-parser'
import cors from 'cors'
import {fileURLToPath} from 'url'
import morganMiddleware from "./morganMiddleware.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (app) =>{

    const whitelist = ['http://localhost:3000'] //클라이언트 (프론트 URL)
    //cors 옵션
    const corsOptions = {
        origin: function (origin, callback) {
            const isWhitelisted = whitelist.indexOf(origin) !== -1
            callback(null, isWhitelisted)
        },
        credentials: true,
    }
    app.use(cors(corsOptions))
    app.use(express.json())  //json 형식
    app.use(express.urlencoded({ extended: true })) //x-www-form-urlencoded 형식
    //app.use(cookieParser()) //쿠키사용
    app.use(express.static(path.join(__dirname, '..', 'public')))
    app.use(morganMiddleware) //morgan 미들웨어 설정
    
}