import { useParams } from "react-router-dom"

export const Category = () =>
{
    const {Category,ID} = useParams();
    return(

    <div>
        <h1>Categoria: {Category}</h1>
        <h1>Produto: {ID}</h1>
    </div>
    );
}