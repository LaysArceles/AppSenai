import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Pessoa(){
  <>
  <h1>nome:{nome}</h1>
  <h1>sobrenome:{Sobrenome}</h1>
  <h1>Idade:</h1>
  </>
}

function App() {
  const [value,setValue] = useState(0)
  const[txt,setTxt] = useState(" ")
  const[isHidden,setIsHidden] = useState (false)
  useEffect(()=>{
    console.log("teste")
  },[txt])

  return (
    <>
      <div className='h-screen'>
    <button onClick={()=> setValue(value + 1)}> + </button>
    {value}
    <button onClick={()=>setValue(value - 1)}> - </button>
    <input type="text" onChange={(e)=>setTxt(e.target.value)} />
      <h1>{txt}</h1>
      <button onClick={()=>setIsHidden(!isHidden)}>eee</button>
    {
      isHidden ?
      <div className='bg-amber-950 w-full h-full'></div>: <div className='bg-amber-50 w-full h-full'></div>
    }
    </div>

    </>
  )
}

export default App
