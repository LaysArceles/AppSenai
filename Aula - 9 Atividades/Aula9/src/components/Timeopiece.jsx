import { useEffect, useRef, useState } from "react";

export const Timepiece = () => {
  const [time, setTime] = useState(0);
  const inputSecs = useRef(null);
  const inputMins = useRef(null);
  const intervalRef = useRef(null);

  const count = () => {
    const secValue = inputSecs.current ? parseInt(inputSecs.current.value, 10) : 0;
    const minValue = inputMins.current ? parseInt(inputMins.current.value, 10) : 0;

    if (
      (!isNaN(secValue) && secValue >= 0 && secValue < 60) &&  
      (!isNaN(minValue) && minValue >= 0 && minValue <= 60)
    ) {
      setTime(minValue * 60 + secValue); 
    }
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [time]);

  const mins = Math.floor(time / 60);
  const secs = time % 60;

  return (
    <div>
      <div className="clock">
        {mins.toString().padStart(2, "0")}:
        {secs.toString().padStart(2, "0")}
      </div>
      <div className="Cronos">
        <input ref={inputMins} type="number" min="0" placeholder="Minutos" />
        <input ref={inputSecs} type="number" min="0" max="59" placeholder="Segundos" />
      </div>
      <button onClick={count}>Iniciar</button>
    </div>
  );
};
