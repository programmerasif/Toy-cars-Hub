

const AddedToy = () => {
    return (
        <div>
            <div className="card-body bg-[#F1F6F9] rounded w-4/5 mx-auto mt-12">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Pictur URL</span>
                    </label>
                    <input type="text" placeholder="Pictur URL" required name='picter' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Name</span>
                    </label>
                    <input type="text" placeholder="Name" required name='name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Seller Name</span>
                    </label>
                    <input type="text" placeholder="SellerName" required name='SellerName' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Seller Email</span>
                    </label>
                    <input type="text" placeholder="SellerEmail" required name='SellerEmail' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Sub-category</span>
                    </label>
                    <input type="text" placeholder="Like sports, Bus,Truck etc" required name='Sub-category' className="input input-bordered" />
                </div>
               <div className="grid grid-cols-3 gap-4 ">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Price</span>
                    </label>
                    <input type="text" placeholder="Price," required name='Price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Rating</span>
                    </label>
                    <input type="text" placeholder="rating" required name='rating' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Quantity</span>
                    </label>
                    <input type="text" placeholder="Available quantity" required name='quantity' className="input input-bordered" />
                </div>
                
               </div>
               <div className="form-control">
                   <input type="button" value="Submit"  className="bg-[#394867] text-white p-4 mt-4"/>
                </div>
            </div>

        </div>
    );
};

export default AddedToy;