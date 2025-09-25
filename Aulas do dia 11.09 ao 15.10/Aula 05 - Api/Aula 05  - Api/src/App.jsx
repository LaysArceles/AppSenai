import { use, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 const [User,setUsers] = useState([])

 useEffect (()=>{
  getUser();
 },[])

  const getUser = async() =>
  {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    setUsers(response.data[9])
  }
  return (
    <>
        {
          User.map(user =>(
            <li key={user.id}>{user.name}</li>
          ))
        }
    </>
  )
}

export default App
