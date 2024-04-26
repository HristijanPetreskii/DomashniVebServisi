const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    firstName: String,
    familyName: String,
    birthday: String,
    address: String,
    email: String,
    password: String
});
/*
1. First Name
2. Family Name
3. Birthday
4. Adresa na ziveenje
*/

const Account = mongoose.model("users", accountSchema);

//Task:
//try to finish these CRUD functions for database operations in MongoDB

const create = async(acc) => {
    const account = new Account(acc);
    return await account.save();
};

const update= async(id, newData) => {
    return await Account.updateOne({ _id: id}, newData);
};

const remove = async(id) => {
    return await Account.deleteOne({ _id: id});
};

const getAll = async() => {
    return await Account.find({});
}

const getById = async(id) => {
    return await Account.findOne({ _id: id});
}

const getByEmail = async(email) => {
    return await Account.findOne( {email: email});
}

const setNewPassword = async(id, new_password) => {
    return await Account.updateOne({ _id: id }, { password: new_password });
}

module.exports = {
    create,
    update,
    remove,
    getAll,
    getById,
    getByEmail,
    setNewPassword,
}