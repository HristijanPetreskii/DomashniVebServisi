const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    /*
    1. Ime na jadenjeto
2. Mesto od kade go naracuvate jadenjeto (primer: imeto na rastoranot),
3. Nacin na plakanje
4. account_id (unikatnoto id na kornikot sto naracal)
    */
    //_id vi e auto generirano pri kreiranje nov zapis
    name: String,
    place: String,
    payment: String,
    
    account_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "accounts"
    },

})

const Orders = mongoose.model("order", orderSchema, "ORDER");

//Task:
// Make the 5 crud functions for this model

const getAll = async(account_id) => {
    return await Orders.find({ account_id });
};

const getOne = async(account_id, id) => {
    return await Orders.findOne( { account_id: account_id, _id: id});
};

const create = async(data) => {
    const blog = new Orders(data);
    return await blog.save();
};

const update = async(id, data) => {
    return await Orders.updateOne( {_id: id}, data );
};

const remove = async(id) => {
    return await Orders.deleteOne({ _id: id });
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}