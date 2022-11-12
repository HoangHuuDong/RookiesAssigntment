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

const getProductByIdCate = async (id) => {
    try{
        let result = await axios.get(url+'get-by-idCategory/'+id);
        return result;
    }catch(error){
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

const updateProduct = async (_id,products,date) => {
    try {
        let product={
            id : _id,
            name: products.name.value,
            description: products.description.value,
            oldPrice: products.oldprice.value,
            price: products.price.value,
            image: products.image.value,
            categoryId: products.category.value,
            updatedDate: date,
        };
        console.log(product);
        let result = await axios.put(url+'update-product',product);
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


export {getProduct,getProductByIdCate,addProduct,delProduct,updateProduct}