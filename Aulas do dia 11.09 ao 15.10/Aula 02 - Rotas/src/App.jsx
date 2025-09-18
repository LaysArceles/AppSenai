import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Profile } from './Componets/Profile';
import { Category } from './Componets/Category';
import { Users } from './Componets/Users';
import { Page } from './Componets/Page';


function App() {

  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to={'/'}>home</Link>
      </nav>
      <Routes>
        <Route path='/User/:ID' element={<Profile/>} ></Route>
        <Route path='/Products/:Category/:ID'element ={<Category/>}/>
        <Route path='/Users' element ={<Users/>}/> 
        <Route path='/Users/:id' element ={<Page/>}/> 


      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
