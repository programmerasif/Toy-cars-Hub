import { useEffect, useState } from "react";
import AlldataCard from "./AlldataCard";


const AllToy = () => {
  const [cars, setCars] = useState([])
  const shortData = cars.slice(0, 20)
  const [isOn,On] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:5000/allCar`)
      .then(res => res.json())
      .then(data => setCars(data))
  }, [])
  const handelShow = () =>{
    On(true)
  }
  console.log(cars);
  return (
    <div>

      <div className="flex justify-center items-center gap-3 ">
        <input type="text" className="input input-bordered w-2/3 mt-5 mb-5 " />
        <input type="button" value='Search' className="input input-bordered bg-[#394867] text-white" />
      </div>
      {
       isOn ==true? cars.map(car => <AlldataCard cars={car} key={car._id} />):shortData.map(car => <AlldataCard cars={car} key={car._id} />)
      }

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input onClick={handelShow} type="button" value='Show All' className={`${isOn && 'hidden'}  mb-12 bg-[#394867] text-white`} />
      </div>
    </div>
  );
};

export default AllToy;