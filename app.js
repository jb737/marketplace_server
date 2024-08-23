import express from "express";
import bodyParser from "body-parser";
import productsRouter from "./routers/productsRouter.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(bodyParser.json());

app.use("/products", productsRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});