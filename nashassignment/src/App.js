import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Category from './components/Category';
import List from './components/List';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCategory } from "./components/CategoryAPI";
import { getProduct } from "./components/ProductAPI";

function App() {
  const [listState,setListState] = useState([])
  const [listItemState,setListItemState] = useState([])

  useEffect(() =>{
    getCategory()
    .then((res) => setListState(res.data))
    .catch((error) => console.log(error))

    getProduct()
    .then((res) => setListItemState(res.data))
    .catch((error) => console.log(error))
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

                  <List listItemProps={listItemState}/>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;