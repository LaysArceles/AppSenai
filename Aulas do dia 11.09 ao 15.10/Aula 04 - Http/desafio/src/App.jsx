import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 const [cat,setCats] = useState({})

 useEffect (()=>{
  setCats();
 },[])

  const getCats = async() =>
  {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search')
    setCats(response.data[0].url)
  }
  return (
    <>
      <div className='h-screen '>
        <center>
          {/* {cat.url && <img src = {cat.url} alt=""></img>} */}
          <img src = {cat} alt=""></img>
        </center>
      <center>

      <div className='h-10 w-25 bg-blue-600 border-8 border-b-black text-blue-300'>
        <button onClick={getCats }> click </button>
      </div>
      </center>
      </div>
    </>
  )
}

export default App

