import { useState } from "react"

export const ProfileCard = ({Add}) => {
    const [Name,setName] = useState(" ")
    const [Age,setAge] = useState(0)
    const [Profission,setProf] = useState(" ")
    const Clear = () =>{
        Add(Name,Age,Profission);
        setAge(0);
        setName(" ");
        setProf(" ");
    }

    return(
        <div className="Catao" >
            <div>
                <input type="text" 
                placeholder="Name"
                value={Name} 
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <input type="number" 
                placeholder="Age"
                value={Name} 
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <input type="text" 
                placeholder="Profission"
                value={Name} 
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <button onClick={Clear}>Send</button>        
            

        </div>
    );
};
export const Bank = ({ProfileCard}) => {
    return(

        <div className="BankPage">
        <h1> Data Profile</h1>

        {ProfileCard === 0 ?(
            <p>Data was not sent</p>
        ) :(
            <ul>
                {ProfileCard.map((t,i) =>
                    (<li kay={i}>{t}</li>)
                )}
            </ul>
        )}
    </div>
);
};