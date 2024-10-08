import express from "express";
//import DUMMY_PRODUCTS from "../dummyData/products.js";
import { PRODUCT_NOT_FOUND_MESSAGE } from "../constants/errorMessages.js";

const productsRouter = express.Router();

productsRouter.get("/", (_, res) =>{
    res.send(DUMMY_PRODUCTS)
});

productsRouter.post("/", (req, res) =>{
    const newProduct = {
        ...req.body, 
        postedOn: new Date(), 
        id:DUMMY_PRODUCTS.length + 1
    };

    DUMMY_PRODUCTS.push(newProduct);

    res.status(201).send(newProduct);
});

productsRouter.get("/:productId", (req,res) => {
    const productId = req.params.productId;
    const product = DUMMY_PRODUCTS.find((product) => product.id === +productId);

    if(!product) res.status(404).send(PRODUCT_NOT_FOUND_MESSAGE);

    res.send(product);
});

//we want to add a specific dynamic path. This id specifically and this id can change
productsRouter.put("/:productId", (req, res) => {
    const productId = req.params.productId;
    const productToUpdate = DUMMY_PRODUCTS.find((p) => p.id === +productId);

    if(!productToUpdate) return res.status(404).send(PRODUCT_NOT_FOUND_MESSAGE);

            productToUpdate.name = req.body.name;
            productToUpdate.price = req.body.price;
            productToUpdate.images = req.body.images;

    res.send(productToUpdate);
});

productsRouter.delete("/:productId", (req, res) => {
    const productId = req.params.productId;
    const productToDeleteIndex = DUMMY_PRODUCTS.findIndex((p) => p.id == productId);

    if (productToDeleteIndex === -1) return res.status(404).send(PRODUCT_NOT_FOUND_MESSAGE);

    const deletedProduct = DUMMY_PRODUCTS.splice(productToDeleteIndex, 1);

    res.send(deletedProduct[0]);
});

export default productsRouter;
