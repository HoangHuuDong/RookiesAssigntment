import logo from './logo.svg';
import axios from "axios"
import React, { Fragment,Component } from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

const columnDefs = [
  {
      "headerName": "Tên",
      "field": "name",
  },
  {
      "headerName": "Mô tả",
      "field": "description",
  },
  {
      "headerName": "Ảnh",
      "field": "image",
  },
  {
      "headerName": "Giá",
      "field": "price",
  },
  {
      "headerName": "Ngày tạo",
      "field": "createdDate",
  },
]

function App() {
  const { data } = useFetch( 'https://localhost:7290/api/product/get-product' );
  console.log(data);  
  return (
    <Fragment className="app">
      <Header/>

      <div className="app_container">
            <div className="grid">
                <div className="grid__row app_content">
                    <div className="grid__column-2">
                        <nav className="category">
                            <h3 className="category-heading">
                                <i className="category-heading-icon fa-solid fa-list"></i>
                                Category
                            </h3>
            
                            <ul className="category-list">
                                <li className="category-item category-item--active">
                                    <a href="#" className="category-item-link">Áo</a>
                                </li>
                                <li className="category-item">
                                    <a href="#" className="category-item-link">Quần</a>
                                </li>
                                <li className="category-item">
                                    <a href="#" className="category-item-link">Mỹ phẩm</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="grid__column-10">
                        <div className="show-item">
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
}

const useFetch = (url = 'https://localhost:7290/api/product/get-product', options = null) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url, options]);
  return {data}
}

export default App;