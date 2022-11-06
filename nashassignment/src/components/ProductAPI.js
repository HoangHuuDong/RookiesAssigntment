import React from "react";
import axios from "axios";

const url = "https://localhost:7290/api/product/";

const getProduct = async () => {
    try {
        let result = await axios.get(url+'get-product');
        console.log(result);
        return result;
      } catch (error) {
        console.log(error);
    }
}

const addProduct = async (productName) => {
    try {
        let product={
            name: productName,
            created_by: null,
            created_at: null,
            updated_at: null
        };
        let result = await axios.post(url+'add-product', product);
        console.log(result);
    return result;
    } catch (error) {
    console.log(error);
    }
}

const updateProduct = async (_id,productName) => {
    try {
        let product={
            id: _id,
            name: productName,
            created_by: null,
            created_at: null,
            updated_at: null
        };
        let result = await axios.put(url + 'update/' + _id, product);
        console.log(result);
    return result;
    } catch (error) {
    console.log(error);
    }
}

const delProduct = async (_id) => {
    try {
        let product={
            id: _id,
            created_by: null,
            created_at: null,
            updated_at: null
        };
        let result = await axios.delete(url + 'delete/' + _id, product)
        console.log(result);
    return result;
    }
    catch (error){
        console.log(error);
    }
}


export {getProduct,addProduct,delProduct,updateProduct}