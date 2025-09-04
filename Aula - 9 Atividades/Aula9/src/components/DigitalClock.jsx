import { useEffect, useState } from "react"

export const DigitalClocks = () => {
    const[time, setTime] = useState(new Date())

    useEffect (()=>{
        const timer = setInterval(()=> setTime(new Date()),1000);
        return() => clearInterval(timer)
    },[]);

    const see = time.toLocaleTimeString();

    return <time dateTime={time.toISOString()}>{see}</time>
}