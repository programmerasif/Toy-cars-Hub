import { useEffect, useState } from "react";
import AlldataCard from "./AlldataCard";


const AllToy = () => {
  const [cars ,setCars] = useState([])
  useEffect(() =>{
    fetch(`http://localhost:5000/allCar`)
    .then(res => res.json())
    .then(data => setCars(data))
  },[])
  console.log(cars);
    return (
        <div>
            {
              cars.slice(0,20).map(car => <AlldataCard cars={car} key={car._id}/>)
            }
        </div>
    );
};

export default AllToy;