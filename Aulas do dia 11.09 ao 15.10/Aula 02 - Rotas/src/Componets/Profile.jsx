import { useState } from "react"
import { useParams } from "react-router-dom";

export const Profile = () =>
{
    const { ID } = useParams();
    if(ID == 1)
    {
         return(
        <div className="Cart">

         <h1>Admin { ID }</h1>
        </div>
    );  
    }
    else
    {
        return(
            <div className="Cart">
    
             <h1>usuario { ID }</h1>
            </div>
        );
    }
};