import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SingleCard = ({cars}) => {
    const {user} = useContext(AuthContext)
    const handelMessage = () =>{
        if (!user?.email) {
            Swal.fire({
                position: 'top-center',
                icon: 'info',
                title: 'You have to login first',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
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
                    <Link to={`/viewDetilsforHom/${_id}`}><button className="btn" onClick={handelMessage}>View Detils</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;