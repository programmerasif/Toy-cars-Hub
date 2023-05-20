
import { useLoaderData } from 'react-router-dom';

const UpdatedMyToy = () => {
    const data = useLoaderData();
    console.log(data);
    const {_id,price,availableQuantity,description} = data
    return (
        <div className=' w-3/4 mx-auto flex items-center justify-center h-[80vh] bg-[#F1F6F9] mt-4'>
            <div className='px-14 py-24 border border-gray-400'>
            <form>

<div className="grid grid-cols-3 gap-4">
    <div className="form-control">
        <label className="label">
            <span className="label-text text-black">Price</span>
        </label>
        <input type="number" placeholder="Price" defaultValue={price} required name='Price' className="input input-bordered" />
    </div>

    <div className="form-control">
        <label className="label">
            <span className="label-text text-black">Quantity</span>
        </label>
        <input type="number" defaultValue={availableQuantity} placeholder="Available quantity" required name='quantity' className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text text-black">Description</span>
        </label>
        <input type="text" placeholder="Available quantity" defaultValue={description} required name='descripton' className="input input-bordered" />
    </div>

</div>
<div className="form-control mt-6">
    <input type="submit" value='Update' className="btn bg-[#394867]" />
</div>
</form>
            </div>
        </div>
    );
};

export default UpdatedMyToy;