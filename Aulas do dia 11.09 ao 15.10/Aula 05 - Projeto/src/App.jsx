import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Logo from './assets/hp.svg'
import { Persona } from './page/Persona'
import { Carousel } from './page/carousel'
import './App.css'
import './page/base.css'
import './page/sandbox.css'
import './page/embla.css'

function App() {
  const OPTIONS = { loop: true }
  const [carts, setCarts] = useState([])

  useEffect(() => {
    axios.get('https://hp-api.onrender.com/api/characters')
      .then(res => {
        const filtered = res.data.filter(c => c.image)
        setCarts(filtered)
      })
  }, [])

  return (
    <BrowserRouter>
      <nav>
        <div className='flex w-full h-20 bg-red-900'>
          <img src={Logo} alt="Harry_Potter_wordmark.svg" />
          <div className='flex justify-center w-full h-20 bg-red-900'>
            <div className='flex justify-center'>
              <div className='text-purple-50 text-4xl'>
                <Link to={"/"}><h1>Home</h1></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='h-screen'>
        <div className='flex justify-center text-amber-50 bg-black'>
          <Routes>
            <Route path='/aaa' element={<Carousel slides={carts} options={OPTIONS} />} />
            <Route path='/' element={<Carousel slides={carts} options={OPTIONS} />} />
            <Route path='/Persona' element={<Persona />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

