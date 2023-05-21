
import { useEffect, useState } from "react";

import BestSellingCard from "./BestSellingCard";
const BestSelling = () => {
    const [toprated,setToprsit] = useState([])
    useEffect(() =>{
        fetch('https://server-forassiignment11.vercel.app/topRated')
        .then(res => res.json())
        .then(data => setToprsit(data))
    },[])


   
    return (
        <div> 

            <h5 className="text-4xl font-bold text-center mb-12">Top Selling Toys</h5>
            <div  className="grid md:grid-cols-4 sm:grid-cols-1 gap-5 py-8 bg-[#F1F6F9] mx-auto">
            {
                toprated.map(car => <BestSellingCard car={car} key={car._id}/> )
            }
            </div>
        </div>
    );
};

export default BestSelling;