import React from "react";
import axios from "axios";

const url = "https://localhost:7290/api/category/";

const getCategory = async () => {
    try {
        let result = await axios.get(url+'get-category');
        return result;
      } catch (error) {
        console.log(error);
    }
}

const addCategory = async (categoryName) => {
    try {
        let category={
            name: categoryName,
            created_by: null,
            created_at: null,
            updated_at: null
        };
        let result = await axios.post(url+'add-category', category);
        console.log(result);
    return result;
    } catch (error) {
    console.log(error);
    }
}

const updateCategory = async (_id,categoryName) => {
    try {
        let category={
            id: _id,
            name: categoryName,
            created_by: null,
            created_at: null,
            updated_at: null
        };
        let result = await axios.put(url + 'update/' + _id, category);
        console.log(result);
    return result;
    } catch (error) {
    console.log(error);
    }
}

const delCategory = async (_id) => {
    try {
        let category={
            id: _id,
            created_by: null,
            created_at: null,
            updated_at: null
        };
        let result = await axios.delete(url + 'delete/' + _id, category)
        console.log(result);
    return result;
    }
    catch (error){
        console.log(error);
    }
}


export {getCategory,addCategory,delCategory,updateCategory}