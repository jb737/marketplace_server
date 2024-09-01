import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productsRouter from "./routers/productsRouter.js";
import usersRouter from "./routers/usersRouter.js";
import mongoose from "mongoose";
import "dotenv/config";


const app = express();

app.use(cors({
    origin: process.env.UI_URL,
}));

app.use(bodyParser.json());

app.use("/products", productsRouter);

app.use("/users", usersRouter);

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
    console.log("Successfully connected to the db.");
    const port = process.env.PORT ?? 3000;
    app.listen(() => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((e) => console.error(`Unable to connect to db with error: ${e}`));

