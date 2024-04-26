const { Validator } = require("node-input-validator");

const AccountSignUp = { // Kreirame nov account, ondnosno se registrirame
    firstName: "required|string",
    familyName: "required|string",
    birthday: "required|string",
    address: "required|string",
    email: "required|email",
    password: "required|string"
};

const AccountLogin = {
    email: "required|email",
    password: "required|string"
};

const AccountReset = {
    email: "required|email",
    old_password: "required|string",
    new_password: "required|string"
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = v.check(); 
    if(!e){
        throw{
            code: 400,
            error: v.errors,
        }
    }
};

module.exports = {
    AccountLogin,
    AccountSignUp,
    AccountReset,
    validate
}