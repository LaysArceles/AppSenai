import { useLocation } from "react-router-dom"

export const Persona = () =>
{
    const local = useLocation();
    const {slide } = local.state || {};
    if (!slide ) return <p>Nenhum Cart Selecionando.</p>
    return(
        <div className="justify-center items-center-safe"> 
            <h2>{slide .name}</h2>
            <img src={slide .image} alt="" />
            <p>house: {slide .house}</p>
            <p>Date of birth: {slide .dateOfBirth}</p>
            <p>ancestry: {slide .ancestry}</p>
            <p>patronus: {slide .patronus}</p>
        </div>
    )
}