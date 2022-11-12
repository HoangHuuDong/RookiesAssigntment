import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App';
import ViewByCate from './ViewByCate';

const Routing = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/:id' element={<ViewByCate/>}/>
      </Routes>
    </>
  )
}

export default Routing;