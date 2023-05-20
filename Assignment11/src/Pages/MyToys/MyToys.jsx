import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import MyToyCards from "./MyToyCards";



const MyToys = () => {
const {user} = useContext(AuthContext)
const [myToy,setMytoy] = useState([])
console.log(user);
    useEffect(() =>{
        fetch(`http://localhost:5000/allCars?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMytoy(data))
    },[user?.email])
    return (
        <div>
            {
                myToy.map(cars => <MyToyCards cars={cars} key={cars._id}/>)
            }
        </div>
    );
};

export default MyToys;