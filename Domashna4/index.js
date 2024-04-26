const express = require("express");
const api = express();

const config = require("./pkg/config");
require("./pkg/db");


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


api.listen(config.getSection("development").port, (err) => {
    err
        ? console.error(err)
        : console.log(
            `Server started at port ${config.getSection("development").port}`
        );
});