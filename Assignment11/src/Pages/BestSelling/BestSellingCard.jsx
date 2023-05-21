

const BestSellingCard = ({car}) => {

  console.log(car);
  const {productName,picture,price,rating} = car
    return (
        <div className=" mx-auto ">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="car" className="w-72 h-64" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{productName}</h2>
                        <p>Price : {price}</p>
                        <p>Rating : {rating}</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#394867]">Buy Now</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BestSellingCard;