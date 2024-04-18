const express = require("express");
const api = express();

api.use(express.json());

const {
    getAll,
    getById,
    create,
    update,
    remove
} = require ("./handlers/product");

//GET
api.get("/products", getAll);
api.get("/products/:id", getById);
//POST
api.post("/products", create);
//PUT

//PATCH
api.patch("/products/:id", update);
//DELETE
api.delete("/products/:id", remove);

api.listen(9000, (err) => {
    err ? console.error(err) : console.log("Server started at port 9000!");
});