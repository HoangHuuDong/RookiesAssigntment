import React from "react";
import axios from "axios";

const url = "https://localhost:7290/api/user/";

const getCustomer = async () => {
    try {
        let result = await axios.get(url+'get-users');
        return result;
      } catch (error) {
        console.log(error);
    }
}

const SearchCustomer = async (nameCustomer) => {
    try {
        let result = await axios.get(url+'searching/'+ nameCustomer);
        return result;
      } catch (error) {
        console.log(error);
    }
}

const SortByRole = async () => {
    try {
        let result = await axios.get(url+'sortOrderBy/Role');
        return result;
      } catch (error) {
        console.log(error);
    }
}

const SortByName = async () => {
    try {
        let result = await axios.get(url+'sortOrderBy/Name');
        return result;
      } catch (error) {
        console.log(error);
    }
}

export {getCustomer,SearchCustomer,SortByRole,SortByName}