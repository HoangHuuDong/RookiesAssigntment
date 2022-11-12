import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Category from './components/Category';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCategory } from "./components/CategoryAPI";
import { getProductByIdCate } from './components/ProductAPI';
import {useParams} from "react-router-dom"
import ListByCate from './components/ListByCate';

function ViewByCate() {
    const {id} = useParams();
    const [listState,setListState] = useState([])
    const [listItemState,setListItemState] = useState([])

    const fetchData = async () =>{
        // get-all-category
        const category = await getCategory();
        setListState(category.data);

        // get-product-by-id
        const product = await getProductByIdCate(id);
        setListItemState(product.data);
    }

    useEffect(() =>{
        fetchData()
    },[])
  

    return (
        <Fragment>
            <div className="app">
            <header className="header">
                <Header/>
            </header>

            <div className="app_container">
                <div className="grid">
                    <div className="grid__row app_content">
                        <Category listProps={listState}/>

                        <ListByCate listItemProps={listItemState}/>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
}

export default ViewByCate;