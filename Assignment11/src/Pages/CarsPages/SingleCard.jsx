import { Link } from "react-router-dom";

const SingleCard = ({cars}) => {
    
    console.log(cars);
    const {make,img,price,rating,_id} = cars
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-[300px]">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-start ">
                <h2 className="card-title ">{make}</h2>
                <p>Price :{price}</p>
                <p>Ratings : {rating}</p>
                <div className="card-actions">
                    <Link to={`/viewDetils/${_id}`}><button className="btn">View Detils</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;