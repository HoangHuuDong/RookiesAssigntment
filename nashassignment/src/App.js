import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Category from './components/Category';
import List from './components/List';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";
import { getCategory } from "./components/CategoryAPI";
import { getProduct } from "./components/ProductAPI";

function App() {
  const [listState,setListState] = useState([])
  const [listItemState,setListItemState] = useState([])

  const fetchData = async () =>{
    // get-all-category
    const category = await getCategory();
    setListState(category.data);

    // get-all-product
    const product = await getProduct();
    setListItemState(product.data);
  }

  useEffect(() =>{
      fetchData()
  },[])
  

  return (
    <Router>
      <Fragment>
        <div className="app">
          <header className="header">
            <Header/>
          </header>

          <div className="app_container">
              <div className="grid">
                  <div className="grid__row app_content">
                    <Category listProps={listState}/>

                    <List listItemProps={listItemState}/>
                  </div>
              </div>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;