import express from "express";
import dummyProducts from "../dummyData/products.js";

const productsRouter = express.Router();

productsRouter.get("/", (_, res) =>{
    res.send(dummyProducts)
});

productsRouter.post("/", (req, res) =>{
    const newProduct = {
        ...req.body, 
        postedOn: new Date(), 
        id: dummyProducts.length + 1
    };

    dummyProducts.push(newProduct);

    res.status(201).send(newProduct);
});
//we want to add a specific dynamic path. This id specifically and this id can change
productsRouter.put("/:productId", (req, res) => {
    const productId = req.params.productId;
    const productToUpdate = dummyProducts.find((p) => p.id === +productId);

    if(!productToUpdate) return res.status(404).send("product not found");

            productToUpdate.name = req.body.name;
            productToUpdate.price = req.body.price;
            productToUpdate.images = req.body.images;

    res.send(productToUpdate);
});

productsRouter.delete("/:productId", (req, res) => {
    const productId = req.params.productId;
    const productToDeleteIndex = dummyProducts.findIndex((p) => p.id == productId);

    if (productToDeleteIndex === -1) return res.status(404).send("product not found");

    const deletedProduct = dummyProducts.splice(productToDeleteIndex, 1);

    res.send(deletedProduct[0]);
});

export default productsRouter;
