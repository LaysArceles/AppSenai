import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Botao } from './components/Botao'
import './App.css'

function App() {

  const [value,setValue] = useState(0)
  const[txt,setTxt] = useState(" ")
  const[isHidden,setIsHidden] = useState (false)

  useEffect(()=>{
    console.log("teste")
  },[txt])

  return (
    <>
      <Botao
        cor={"bg-blue-500 text-white" }
        altura={"h-12" }
        largura={"w-32" }
        conteudo={"Clique Aqui" }
        hover={"hover:bg-black"}
      />
      <br />
          <Botao
        cor={"bg-pink-500 text-white" }
        altura={"h-12" }
        largura={"w-32" }
        conteudo={"Clique Aqui" }
        hover = {"hover:bg-blue-500"}
      />
      <br />
      <div className='h-screen '>
    <button onClick={()=> setValue(value + 1)}> + </button>
    {value}
    <button onClick={()=>setValue(value - 1)}> - </button>
    <input type="text" onChange={(e)=>setTxt(e.target.value)} />
      <h1>{txt}</h1>
      <button onClick={()=>setIsHidden(!isHidden)}>eee</button>
    {
      isHidden ?
      <div className='bg-amber-950 w-full h-full justify-items-center-safe  text-center text-shadow-zinc-50'> <h1 >Odio</h1></div>:
       <div className='bg-amber-50 w-full h-full'></div>
    }
    </div>

    </>
  )
}

export default App
