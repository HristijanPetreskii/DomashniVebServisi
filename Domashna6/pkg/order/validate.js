const { Validator } = require("node-input-validator");

const BlogPOST = {
    order: "required|string",
    location: "required|string",
    paymentType: "required|string",
};

const BlogPUT = {
    order: "required|string",
    location: "required|string",
    paymentType: "required|string",
};

const validate = async(data, schema) => {
    let v = new Validator(data, schema);
    let e = v.check();
    if(!e){
        throw{
            code: 400,
            error: v.error,
        };
    }
};

module.exports ={
    BlogPOST,
    BlogPUT,
    validate
}