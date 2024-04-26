// TASK 
// Probajte lokalnite CRUD funkcii sto rabotea so readFile i writeFile so JSON fajlovi, probajte 
// za istite da napravite schema i crud funkcii sto ke rabotat za MongoDB (so mongoose)
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
        minLength: 2
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        validate: {
            validator: (fieldParam) => fieldParam > 2010,
            message: (props) => `Input car is older than 2010!`,
        },
    },
    ProductWeight: {
        type: Number,
        min: 1200,
        max: 3000
    },
    createdAt: {
        immutable: true,
        type: Date,
        default: () => Date.now(),
    },
    updatedAt:{
        type: Date,
        default: () => Date.now(),
    }
});

const Products = mongoose.model("Products", productSchema, "products");

const addProduct = async(car) => {
    const newProduct = new Products(car);
    return await newProduct.save();
};

const removeProduct = async(id) => {
    return await Products.deleteOne({ _id: id});
};

const updateProduct = async(id, newProductsData) => {
    return await Products.updateOne({ _id: id}, newProductsData);
    //...stariPodatoci
    //sakame da zapiseme novi podatoci ...newCarData
    //novite podatoci samo ke se dodadat (apendiraat)
    //ako imate novi podatoci sto se so isto ime na poleto kako starite, novite podatoci ke gi prezapisat vrednostite na starite
    //raboti kako patch
};

const getAllProducts = async() => {
    return await Products.find({});
}

const getProductById  = async(id) => {
    return await Products.findOne({ _id: id});
}

module.exports = {
    addProduct,
   getAllProducts,
   getProductById,
   updateProduct,
   removeProduct
}