import axios from 'axios'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
function List()
{
    const [User,setUsers] = useState([])
    const navigate = useNavigate()

 useEffect (()=>{
  getUser();
 },[])

  const getUser = async() =>
  {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    setUsers(response.data)
  }

  const openUserProfile=(user)=>{
    navigate('/profile', {state: {user}})
  }
  return (
    <ul>
        {User.map(user =>(

            <li
                key={user.id} 
                onClick={()=> openUserProfile(user)}
                style={{cursor:'pointer',marginBottom: '8px'}}
                >{user.name}</li>
            ))
        }
        </ul>
  )
}
export default List