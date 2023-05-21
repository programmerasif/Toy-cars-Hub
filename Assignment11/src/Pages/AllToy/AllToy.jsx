import { useEffect, useState } from "react";
import AlldataCard from "./AlldataCard";


const AllToy = () => {
  const [cars, setCars] = useState([])
  const [searchCars, setsearchCars] = useState([])
  const shortData = cars.slice(0, 20)
  const length = cars.length
  console.log(length);
  const [isOn,On] = useState(false)
  const [search,isSearch] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:5000/allCar`)
      .then(res => res.json())
      .then(data => setCars(data))
  }, [])
  
const handelSearch = (e) =>{
e.preventDefault()
const form = e.target;
const text = form.text.value
fetch(`http://localhost:5000/toySearcing/${text}`)
      .then(res => res.json())
      .then(data => setsearchCars(data))

      isSearch(true)
}


  const handelShow = () =>{
    On(true)
  }

  return (
    <div>

      <div className="flex justify-center items-center gap-3 ">
        <form onSubmit={handelSearch}>
        <input type="text" className="input input-bordered w-2/3 mt-5 mb-5 " name="text" />
        <input type="submit" value='Search' className="input input-bordered bg-[#394867] text-white"/>
        </form>
      </div>
      {
        search == true ? searchCars.map(car => <AlldataCard cars={car} key={car._id} />) : isOn ==true? cars.map(car => <AlldataCard cars={car} key={car._id} />):shortData.map(car => <AlldataCard cars={car} key={car._id} />)
      }

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input onClick={handelShow} type="button" value='Show All' className={`${ length <20 || isOn && 'hidden'}  mb-12 bg-[#394867] text-white`} />
      </div>
    </div>
  );
};

export default AllToy;