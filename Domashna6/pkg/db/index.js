const mongoose = require("mongoose");
const config = require("../config");

const { MONGO_USERNAME, MONGO_PASSWORD } = config.getSection("development");

const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.4y8fvz6.mongodb.net/Homeworks?retryWrites=true&w=majority`;


async function connect(){
    try{
        await mongoose.connect(uri);
    }catch(err){
        console.log(err);
    }
}

connect();