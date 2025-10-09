import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


export const Carts = () =>{
    const [carts,SetCarts] = useState([]);
    useEffect(()=>{
        getCarts();
    },[])
    const getCarts = async() =>
    {
        const Response = await axios.get('https://hp-api.onrender.com/api/characters')
        console.log(Response.data)
        SetCarts(Response.data)
    }
    const openCrarts=(carts)=>{
        Navigate('/',{state: {carts}})
    }
    return(
        

        <ul>
                {carts
                .filter (carts => carts.image)
                .map(carts=>(
                    <li
                    key={carts.id}
                    onClick={()=>openCrarts(carts)}
                    style={{cursor:'pointer',}}
                    >
                    <div className="flex justify-center flex-col items-center m-3 border-4 border-amber-950 ">

                     <img  className="w-50 h-50 object-cover" src={carts.image} alt=""  height={50}/>
                     <div>

                     {carts.name}
                     </div>
                    </div>
                    
                 </li>
            ))}
        </ul>

    );
} 
export default Carts