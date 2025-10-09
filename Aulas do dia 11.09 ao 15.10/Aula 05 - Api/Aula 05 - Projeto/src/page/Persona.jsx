import { useLocation } from "react-router-dom"

export const Persona = () =>
{
    const local = useLocation();
    const {slide } = local.state || {};
    if (!slide ) return <p>Nenhum Cart Selecionando.</p>
    return(
        <div className="h-screen">
        <div className="justify-center text-5xl border-10 border-black ">
            Characteristics of the characters
        </div>
         <div className="flex">
        <div className="flex-col-reverse">
            <img src={slide.image} alt="" />
            </div>
        <div className="justify-center  flex-col items-center-safe  border-50 border-black"> 
            <h2>{slide.name}</h2>
            <p>House: {slide.house}</p>
            <p>Date of birth: {slide.dateOfBirth}</p>
            <p>Ancestry: {slide.ancestry}</p>
            <p>Patronus: {slide.patronus}</p>
        </div>
        </div>   
        </div>
    )
}