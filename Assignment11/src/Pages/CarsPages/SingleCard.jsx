
const SingleCard = ({cars}) => {
    
    console.log(cars);
    const {make,img,price,rating} = cars
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
                    <button className="btn">View Detils</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;