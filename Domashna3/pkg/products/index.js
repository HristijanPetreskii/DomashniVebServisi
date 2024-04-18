const { request } = require("express");

const {readData,writeData}=require("../files/index")

const DATA_SOURCE = `${__dirname}/../../products`;
//C:\Users\User5548\Desktop\VebServisi\Domashna3\pkg\products


const addProduct=async(product)=>{
    try{
          const data=await readData(DATA_SOURCE);
          data.push(product);
          await writeData(data,DATA_SOURCE);
    }
    catch(err){
        throw err;
    }
};

const getAllProducts=async()=>{
    try{
       const data=await readData(DATA_SOURCE);
       return data;
    }
    catch(err){
        throw err;
    }
};
const getProductById=async(id)=>{
    try{
        const data=await readData(DATA_SOURCE);
        const find=data.find(el=>el.id === id);
        return find;
        }
    catch(err){
        throw err;
    }
};

const updateProduct=async(id,newProduct)=>{
    try{
         let data=await readData(DATA_SOURCE);
         const find=data.find(el=>el.id === id);
         if(find){
              const newData={
                ...find,
                ...newProduct
              };
              data=data.filter(el=>el.id !== id);
              data.push(newData);
              await writeData(data,DATA_SOURCE);

         }else{
            console.log("Not found!");
         }

    }
    catch(err){
        throw err;
    }
};

const removeProduct=async(id)=>{
    try{
      const data=await readData(DATA_SOURCE);
      const newData=data.filter(el=>el.id !== id);
     await writeData(newData,DATA_SOURCE);


    }
    catch(err){
        throw err;
    }
};

module.exports={
   addProduct,
   getAllProducts,
   getProductById,
   updateProduct,
   removeProduct
}
