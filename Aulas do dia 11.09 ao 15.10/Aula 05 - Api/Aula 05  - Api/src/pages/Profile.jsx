import { useLocation } from "react-router-dom"

export const Profile = () =>
{
    const location = useLocation();
    const{user} = location.state || {};

    if (!user ) return <p> Nenhum usuario Selecionando.</p>;

    return(
        <div>
            <h2>Profile User</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone} </p>            
        </div>
    )
}
