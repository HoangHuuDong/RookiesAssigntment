import axios from "axios"
import React, { Fragment,Component } from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Category from './components/Category';
import List from './components/List';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [listState,setListState] = useState([])
  const [listItemState,setListItemState] = useState([])

  const fetchData = async () =>{
    const category = 'https://localhost:7290/api/category/get-category';
    const product = 'https://localhost:7290/api/product/get-product'

    const getCategory = await axios.get(category)
    const getProduct = await axios.get(product)
    axios.all([getCategory,getProduct]).then(
      axios.spread((...allData) => {
        const allCategory = allData[0].data
        const allProduct = allData[1].data
        console.log(allProduct)

        setListState(allCategory)
        setListItemState(allProduct)
      })
    )
  }

  useEffect(() =>{
      fetchData()
      // const getData = async () =>{
      //     try {
      //         const res = await axios.get('https://localhost:7290/api/category/get-category')
      //         setListState(res.data)
      //         // console.log(listState)
      //     } catch (error) {
      //         console.log(error.message)
      //     }
      // }
      // getData()
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

// const useFetch = (url = 'https://localhost:7290/api/product/get-product', options = null) => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(url, options)
//       .then(res => res.json())
//       .then(data => setData(data));
//   }, [url, options]);
//   return {data}
// }

export default App;