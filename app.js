import express from "express";
import bodyParser from "body-parser";
import dummyProducts from "./dummyData/products.js"

const app = express();

//middleware is a function or series of functions executed on req or res on the server side

app.use(bodyParser.json());

app.get("/",(req, res, next) =>{
    res.send(dummyProducts);
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});