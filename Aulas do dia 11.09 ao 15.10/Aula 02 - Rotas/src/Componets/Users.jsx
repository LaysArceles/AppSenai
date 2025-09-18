import { Link } from "react-router-dom";

export const Users = () =>
{
    const List = [1,2,3,4,5];
    return(
        <div>
            <h1>Lista de users</h1>
            <ul>
                {List.map((id) =>(
                    <li key={id}>
                        <Link to = {`/Users/${id}`}>User {id}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};