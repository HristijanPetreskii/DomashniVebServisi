const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    email: String,
    password: String,
    fullname: String
});

const Account = mongoose("accounts", accountSchema);

//Task:
//try to finish these CRUD functions for database operations in MongoDB

//const Products = mongoose.model("Products", productSchema, "products");

const add = async(elem) => {
    const newProduct = new Account(elem);
    return await newProduct.save();
};

const remove = async(id) => {
    return await Account.deleteOne({ _id: id});
};

const update = async(id, newProductsData) => {
    return await Account.updateOne({ _id: id}, newProductsData);
    //...stariPodatoci
    //sakame da zapiseme novi podatoci ...newCarData
    //novite podatoci samo ke se dodadat (apendiraat)
    //ako imate novi podatoci sto se so isto ime na poleto kako starite, novite podatoci ke gi prezapisat vrednostite na starite
    //raboti kako patch
};

const getAll = async() => {
    return await Account.find({});
}

const getById  = async(id) => {
    return await Account.findOne({ _id: id});
}

module.exports = {
    add,
   getAll,
   getById,
   update,
   remove
}