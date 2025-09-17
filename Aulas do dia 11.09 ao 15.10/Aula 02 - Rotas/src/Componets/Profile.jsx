import { useState } from "react"
import { useParams } from "react-router-dom";

export const Profile = () =>
{
    const { ID } = useParams();

    
    return(
        <div className="Cart">
         <h1>usuario { ID }</h1>
        </div>
    );
};