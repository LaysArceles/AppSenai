import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DigitalClocks } from './components/digitalclock'
import { Timepiece } from './components/Timeopiece'

function App() {
  
  
  return (
    <>
    <div className='clock'>
     <DigitalClocks />
    </div>

      <div className='Timer'> 
      <Timepiece/>
      </div>
    </>
  )
}

export default App
