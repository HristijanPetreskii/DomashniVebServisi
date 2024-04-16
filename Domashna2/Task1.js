const fs = require("fs");

//read file
const readData = (source) => {
    return new Promise ((success, fail) => {
        fs.readFile(`${source}.json`,"utf-8", (err, data) => {
            if(err) return fail(err);
            const out = JSON.parse(data);
            return success(out);
        });
    });
}

//write file

const writeData = (data, destination) => {
    return new Promise ((success, fail) => {
        const out = JSON.stringify(data);
        fs.writeFile(`${destination}.json`, out, (err) => {
            if(err) return fail(err);
            return success();
        })
    });
}

const addProduct = async(id, name, price) => {
    try{
        const product = {
            id: id,
            name: name,
            price: price
     }
        let data = await readData("./products");
        data.push(product);
        await writeData(data, "./products");
    }catch(err){
        throw err;
    }
}

const updateProduct = async(id, newPrice) => {
    try{
        let data = await readData("./products");
        const product = data.find((el) => el.id === id);
        const newProduct= {
            ...product,   
            ...newPrice  
        };
        data = data.filter((el) => el.id != id); 
        data.push(newProduct);
        await writeData(data, "./products");
    }catch(err){
        throw err;
    }
}

const removeProduct = async (id) => {
    try{
        const data = await readData("./products");
        const out = data.filter((el) => el.id !== id);
        await writeData(out, "./products")
    }catch(err){
        throw err;
    }
}

const execute = async() => {
    //await addProduct(2, "Mercedes", 500);
    //await updateProduct(1, {price: 800});
    //await removeProduct(2);
};

execute();