import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function home(){
  return <h1>Poise</h1>
}
function Sobre(){
  return <h1>é Mesmo</h1>
}

function App() {

  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to = "/">Home </Link>
        <Link to="/Sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<home/>}/>
        <Route path='/sobre' element={<sobre/>}/>
      </Routes>
      </BrowserRouter> 

    </>
  )
}

export default App
