import React from "react";
import axios from "axios";

const url = "https://localhost:7290/api/product/";

const getProduct = async () => {
    try {
        let result = await axios.get(url+'get-product');
        return result;
      } catch (error) {
        console.log(error);
    }
}

const addProduct = async (nameP,descriptionP,oldPriceP,priceP,imgP,categoryId,date) => {
    try {
        let product={
            name: nameP,
            description: descriptionP,
            oldPrice: oldPriceP,
            price: priceP,
            image: imgP,
            image2: "",
            image3: "",
            createdDate : date,
            categoryId : categoryId,
        };
        let result = await axios.post(url+'add-product', product);
        console.log(result);
    return result;
    } catch (error) {
    console.log(error);
    }
}

const updateProduct = async (_id,nameP,descriptionP,oldPriceP,priceP,imgP,categoryId,date) => {
    try {
        let product={
            name: nameP,
            description: descriptionP,
            oldPrice: oldPriceP,
            price: priceP,
            image: imgP,
            categoryId: categoryId,
            updatedDate: date,
        };
        console.log(product);
        let result = await axios.put(url+'update-product/'+_id, product);
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