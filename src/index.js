import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
const app=express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoute)
app.use("/api/message",messageRoute)
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}
));
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("server listening on port:" + PORT );
    connectDB();
});
