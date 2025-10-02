import { useLocation } from "react-router-dom"
import Carts from "./Carts";

export const Persona = () =>
{
    const local = useLocation();
    const {Persona} = local.state || {};
    if (!Persona) return <p>Nenhum Cart Selecionando.</p>
    return(
        <div className="justify-center items-center-safe"> 
            <h2>{Persona.name}</h2>
            <img src={Persona.image} alt="" />
            <p>house: {Persona.house}</p>
            <p>Date of birth: {Persona.dateOfBirth}</p>
            <p>ancestry: {Persona.ancestry}</p>
            <p>patronus: {Persona.patronus}</p>
        </div>
    )
}