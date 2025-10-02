import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Carts from './page/Carts'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Logo from './assets/hp.svg'
import { Persona } from './page/Persona'

function App() {

  return (
    <>
    <BrowserRouter>
    <nav>
      <div className='flex w-full h-20 bg-red-900  '>
        <img src={Logo} alt="Harry_Potter_wordmark.svg" />

        <div className='justify-end'>
        <div className=' items-center-safe text-purple-50  text-4xl'> 
        <Link to={"/"}><h1> Home </h1></Link>
        </div>
        </div>
      </div>
    </nav>
    <div className='h-screen'>
    <div className='flex justify-center text-amber-50 bg-black'>


    <Routes>
    <Route path='/' element={<Carts/>}></Route>
     <Route path='/Persona' element={<Persona/>}></Route>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
