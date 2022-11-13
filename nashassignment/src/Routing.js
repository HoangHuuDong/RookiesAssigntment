import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App';
import Customer from './components/Customer';
import ViewByCate from './ViewByCate';

const Routing = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/:id' element={<ViewByCate/>}/>
          <Route path='/customer' element={<Customer/>}/>
      </Routes>
    </>
  )
}

export default Routing;