import { useEffect, useState } from "react"

export const Button = () =>{
    const [Count, setcount] = useState(0)

    const result = () =>{
        setcount(Count => Count - 1)
    }
    const resultd = () =>{
    setcount(Count => Count + 1)
    }
    return(
    <div>
         <button onClick ={result}>-</button>
            O contador agora está em {Count}   
         <button onClick ={resultd}>+</button>
    </div>
    );
};