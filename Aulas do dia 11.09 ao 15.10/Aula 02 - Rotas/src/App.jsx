import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Profile } from './Componets/Profile';
import { Category } from './Componets/Category';


function App() {

  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to={'Users'}> </Link>
      </nav>
      <Routes>
        <Route path='/User/:ID' element={<Profile/>} ></Route>
        <Route path='/Products/:Category/:ID'element ={<Category/>}/> 

      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
