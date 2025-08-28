import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [texto,setTexto] = useState("")
  return (
    <>
    <div className='cartao'>
     <p>Festa é um evento social organizado com o propósito de celebrar, confraternizar ou marcar uma ocasião especial. Ela pode variar muito em tamanho, estilo e finalidade, indo desde pequenas reuniões familiares até grandes eventos públicos. As festas geralmente envolvem uma série de elementos como música, dança, comida, bebidas, decoração temática e atividades recreativas que promovem a interação e o entretenimento dos participantes.
      As festas podem ter diferentes motivações, como comemorar aniversários, casamentos, feriados religiosos ou civis, conquistas pessoais e profissionais, rituais culturais, festivais tradicionais, entre outros. Elas funcionam como um momento de lazer, socialização e fortalecimento dos laços entre amigos, familiares e comunidades.
      Além do aspecto festivo, as festas também desempenham um papel cultural importante, refletindo costumes, tradições e valores de uma sociedade. Elas são uma forma de expressão coletiva e ajudam na transmissão de identidade cultural entre gerações.</p>
    <button on={}></button>
    </div>
    <button onClick={() => setCount((count) => count + 2)}> Clicks {count} </button>
    
    <input type="text" onChange={(e) => setTexto(e.target.value)} />
    <h1>{texto}</h1>
    <input type="rgb" onClick={buttonCor} />
      
    </>
  )
}

export default App
