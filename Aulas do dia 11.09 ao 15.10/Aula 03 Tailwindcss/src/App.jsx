import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      {/* Cor e tamanho da palavra */}
      <h1 className='text-blue-500 text-6xl'>Testando tainwind</h1>
      
      {/* <h1 className="max-h-screen">Testando tainwind</h1>
      <h1 className="min-h-screen">Testando tainwind</h1> */}

      {/* Quadrado centrelizado na div */}
      <div className="h-screen flex justify-center items-center">
        <div className='w-52 h-52 bg-cyan-800'></div>
      </div>
    </>
  )
}

export default App
