import { useEffect, useState } from "react";

export const BlinkBlink = () => {
    const [color, setColor] = useState("red");

    useEffect(() => {
        const piscar = setInterval(() => {
            setColor(prev => (prev === "red" ? "blue" : "red"));
        }, 1000);

        return () => clearInterval(piscar);
    }, []);
    return <div style={{ width: 100, height: 100, backgroundColor: color }} />;
};
