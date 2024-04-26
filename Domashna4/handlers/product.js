const {
    addProduct,
   getAllProducts,
   getProductById,
   updateProduct,
   removeProduct
} = require("../pkg/products/mongo")


const getAll=async(req,res)=>{
    try{
        const p=await getAllProducts();
        return res.status(200).send(p);
    }
    catch(err){
       console.log(err);
       return res.status(500).send("Server Error");
    }
};

const getById=async(req,res)=>{
    try{
        const id=Number(req.params.id);
        const p=await getProductById(id);
        return res.status(200).send(p);
    }
    catch(err){
        console.log(err);
       return res.status(500).send("Server Error");
    }
};

const create=async(req,res)=>{
    try{
        await addProduct(req.body);
        return res.status(201).send(req.body);
    }
    catch(err){
        console.log(err);
       return res.status(500).send("Server Error");
    }
};

const update=async(req,res)=>{
    try{
        const id=Number(req.params.id);
        const p=await updateProduct(id,req.body);
        return res.status(204).send("");
    }
    catch(err){
        console.log(err);
       return res.status(500).send("Server Error");
    }
};

const remove=async(req,res)=>{
    try{
        const id=Number(req.params.id);
        const p=await removeProduct(id);
        return res.status(200).send("Car deleted!");
    }
    catch(err){
        console.log(err);
       return res.status(500).send("Server Error");
    }
};

module.exports={
    getAll,
    getById,
    create,
    update,
    remove
}