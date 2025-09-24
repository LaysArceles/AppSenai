import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='h-screen '>
        <div className=' h-1/3 flex justify-between ' >

          <div className=' w-62 h-62 bg-purple-800'>

              <div className=' h-1/3 flex justify-center ' >
                <div className='w-20 h20 bg-purple-400'></div></div>
              <div className=' h-1/3 flex justify-center ' ></div>
              <div className=' h-1/3 flex justify-center ' >
                <div className='w-20 h20 bg-purple-400'></div></div>

          </div>
            {/* ========================================================================= */}

          <div className=' w-62 h-62 bg-purple-800'>

              <div className=' h-1/3 flex justify-center ' />
              <div className=' h-1/3 flex justify-center ' >
                <div className='w-20 h20 bg-purple-400'></div></div>
              <div className=' h-1/3 flex justify-center ' />

          </div>
          {/* ===================================================================================== */}

          <div className=' w-62 h-62 bg-purple-800'>
            <div className=' h-1/3 flex justify-baseline '>
              <div className='w-20 h20 bg-purple-400'></div></div>
            <div className=' h-1/3 flex justify-center ' />
            <div className=' h-1/3 flex justify-end-safe '>
              <div className='w-20 h20 bg-purple-400'></div></div>
          </div>
          {/* ===================================================================================== */}
          <div className=' w-62 h-62 bg-purple-800'>
            <div className=' h-1/3 flex justify-baseline '/>
            <div className=' h-1/3 flex justify-center ' />
            <div className=' h-1/3 flex justify-center '>
              <div className='w-20 h20 bg-purple-400'></div></div>
          </div>
        </div>
        {/* ===================================================================================== */}

        <div className='h-1/3 flex justify-between ' >
          <div className=' w-62 h-62 bg-purple-800'>

            <div className=' h-1/3 flex justify-center '>
              <div className='w-20 h20 bg-purple-400'></div></div>
            <div className=' h-1/3 flex justify-baseline '/>
            <div className=' h-1/3 flex justify-center ' />
          </div>
           {/* ===================================================================================== */}

          <div className=' w-62 h-62 bg-purple-800'>
            <div className=' h-1/3 flex justify-center '>
              <div className='w-20 h20 bg-purple-400'></div></div>
            <div className=' h-1/3 flex justify-baseline '>
              <div className='w-25 h20 bg-purple-400'></div>
              <div className='w-25 h20'></div>
              <div className='w-25 h20 bg-purple-400'></div>
              </div>
            <div className=' h-1/3 flex justify-center '>
           <div className='w-20 h20 bg-purple-400'></div></div>
          </div>
           {/* ===================================================================================== */}
          <div className=' w-62 h-62 bg-purple-800'>
            <div className=' h-1/3 flex justify-center '>
              <div className='w-20 h20 bg-purple-400'></div></div>
            <div className=' h-1/3 flex justify-baseline '/>
            <div className=' h-1/3 flex justify-center ' />
          </div>
        </div>
         {/* ===================================================================================== */}
        <div className='h-1/3 flex justify-between ' >
          <div className=' w-62 h-62 bg-purple-800'>
            
            <div className=' h-1/3 flex justify-end-safe '>
              <div className='w-20 h20 bg-purple-400'></div></div>
            <div className=' h-1/3 flex justify-center ' />
            <div className=' h-1/3 flex justify-baseline '>
              <div className='w-20 h20 bg-purple-400'></div></div>
          </div>
          <div className=' w-62 h-62 bg-purple-800'>
            <div className=' h-1/3 flex justify-center ' />
              <div className=' h-1/3 flex justify-center ' >
                <div className='w-20 h20 bg-purple-400'></div></div>
              <div className=' h-1/3 flex justify-center ' />
          </div>
          <div className=' w-62 h-62 bg-purple-800'>
            <div className=' h-1/3 flex justify-end '>
              <div className='w-20 h20 bg-purple-400'></div></div>
            <div className=' h-1/3 flex justify-baseline '/>
            <div className=' h-1/3 flex justify-center ' />
          </div>
        </div>
      </div>


    </>
  )
}

export default App
 