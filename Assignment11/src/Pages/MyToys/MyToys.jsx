import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import MyToyCards from "./MyToyCards";
import Swal from "sweetalert2";



const MyToys = () => {
const {user} = useContext(AuthContext)
const [myToy,setMytoy] = useState([])
console.log(user);
    useEffect(() =>{
        fetch(`https://server-forassiignment11.vercel.app/allCars?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMytoy(data))
    },[user?.email])

    const handelDelete = (id) =>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              fetch(`https://server-forassiignment11.vercel.app/allCars/${id}`,{
            method:'DELETE'
    
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            const remaining =  myToy.filter(toy  => toy._id !== id)
            setMytoy(remaining)
        
        })
            }
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