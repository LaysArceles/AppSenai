import { useState } from 'react';
import './App.css'
import { ProfileCard } from './componets/ProfileCard'
import { Bank } from './componets/ProfileCard'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";


function App() {
  return (
    <> 
    <BrowserRouter>
    <nav>
      <Link to="Profile">Profile</Link>
      <Link to="/">Bank</Link>
    </nav>
    <Routers>
      <Route path="/" element = {<div><Bank ProfileCard={ProfileCard}/><ProfileCard Add={Add}/></div>}/> 
 
    </Routers>
    </BrowserRouter>
    </>
  )
}

export default App
