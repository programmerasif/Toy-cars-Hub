
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedMyToy = () => {
    const data = useLoaderData();
    const {_id,price,availableQuantity,description} = data
       


    console.log(data);
    const handelUpdate = (e) =>{
        e.preventDefault()
        const form = e.target
        const price = form.price.value;
        const Quantity = form.quantity.value;
        const description = form.descripton.value;

        const modificar = {
            price,
            Quantity,
            description
        }

        fetch(`https://server-forassiignment11.vercel.app/allCars/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(modificar)
            
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Update Succesful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }
    return (
        <div className=' w-3/4 mx-auto flex items-center justify-center h-[80vh] bg-[#F1F6F9] mt-4'>
           
            <div className='px-14 py-24 border border-gray-400'>
            <form onSubmit={handelUpdate}>

<div className="grid grid-cols-3 gap-4">
    <div className="form-control">
        <label className="label">
            <span className="label-text text-black">Price</span>
        </label>
        <input type="number" placeholder="Price" defaultValue={price} required name='price' className="input input-bordered" />
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