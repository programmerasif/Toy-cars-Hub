
import { Link, useLoaderData } from 'react-router-dom';
import useTitlt from '../../Hook/useHook';

const ViewdetilsForHom = () => {
    const data = useLoaderData()
    useTitlt('View Detils')
    const {img,rating,price,make,description} = data
    console.log(data);
    return (
        <div className=" mt-12">
           <div className="bg-[#F1F6F9] py-28">
           <div className="md:flex sm:flex-row p-8 py-28 gap-8 justify-center items-center border-8 border-white sm:w-full md:w-2/3 mx-auto">
                <div> <img src={img} alt="" className="w-80 h-80 smx-auto  border-8 border-[#9BA4B5] mb-5" /></div>
                <div className="flex flex-col gap-3 mb-5"> 
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Toy Name  :</span> {make}</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Price : </span>{price}$</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Rating : </span>{rating}</h5>
                    <h5><span className="md:text-2xl sm:text-3xl font-semibold text-[#394867]">Description : </span>{description}</h5>
                    <Link to='/'><span className="btn w-1/4 bg-[#394867]">Back to Home </span></Link>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ViewdetilsForHom;