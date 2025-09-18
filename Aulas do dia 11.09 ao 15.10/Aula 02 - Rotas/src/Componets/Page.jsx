import { useParams } from "react-router-dom"

export const Page  = () =>
{
    const {id} = useParams();
    return <h1> paginas de usuario {id}</h1>
}