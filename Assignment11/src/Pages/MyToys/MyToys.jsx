import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import MyToyCards from "./MyToyCards";
import Swal from "sweetalert2";



const MyToys = () => {
const {user} = useContext(AuthContext)
const [myToy,setMytoy] = useState([])
console.log(user);
    useEffect(() =>{
        fetch(`http://localhost:5000/allCars?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMytoy(data))
    },[user?.email])

    const handelDelete = (id) =>{
        fetch(`http://localhost:5000/allCars/${id}`,{
            method:'DELETE'
    
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Delete Succesful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            console.log(data)
            const remaining =  myToy.filter(toy  => toy._id !== id)
            setMytoy(remaining)
        
        })
       }
    return (
        <div>
            {
                myToy.map(cars => <MyToyCards cars={cars} handelDelete={handelDelete} key={cars._id}/>)
            }
        </div>
    );
};

export default MyToys;