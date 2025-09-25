import { use, useEffect, useState } from 'react'
import './App.css'

import List from './pages/list'
import { Profile } from './pages/profile'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
         <BrowserRouter>
              <nav>
                <div className='flex justify-center items-center w-full h-20 bg-purple-950 text-purple-300'>
                    <Link to={'/'}>
                    <h1>
                    Home
                    </h1>
                    </Link>
                  </div>
                 
              </nav>
                    <div className='h-screen'>
                  <div className='flex justify-center '>
                    <div className='text-blue-700 bg-black '></div>
              <Routes>

                <Route path='/' element={<List/>} ></Route>

                
                    <Route path='/:ID'element ={<Profile/>}>
                    </Route> 
        
              </Routes>
                </div>
                  </div>
            </BrowserRouter>  

    </>
  )
}

export default App
