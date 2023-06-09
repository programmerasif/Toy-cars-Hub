import { Link } from "react-router-dom";


const AlldataCard = ({cars}) => {
    const {pictureURL,sellerName,name,subCategory,price,rating,availableQuantity,_id} =cars
   
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture </th>
                            <th>Sellar Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category </th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Quantity</th>
                            <th>View Details button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={pictureURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                   
                                </div>
                            </td>
                            <td>
                                {sellerName}
                                
                            </td>
                            <td>{name}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">{subCategory}</button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs">{price}</button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs">{rating}</button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs">{availableQuantity}</button>
                            </th>
                            <th>
                                <Link to={`/view/${_id}`}><button className="btn bg-[#394867]">View Detils</button></Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AlldataCard;