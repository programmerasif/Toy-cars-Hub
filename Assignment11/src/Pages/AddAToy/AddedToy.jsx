


const AddedToy = () => {
    const handelAdded = (e) =>{
        e.preventDefault();
        const form = e.target
        const Picture = form.picter.value;
        const CarName = form.name.value;
        const SellerName = form.SellerName.value;
        const SellerEmail = form.SellerEmail.value;
        const SubCategory = form.SubCategory.value;
        const Price = form.Price.value;
        const Rating = form.rating.value;
        const Quantity = form.quantity.value;
        const person = {
            pictureURL: Picture,
            name:CarName,
            SellerEmail,
            sellerName:SellerName,
            subCategory:SubCategory,
            price: Price,
            rating: Rating,
            availableQuantity:Quantity}
        console.log(person);

        fetch(`http://localhost:5000/allCars`,{
            method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(person)
          })
          .then(res => res.json())
          .then(data => console.log(data))
    }

    
    return (
        <div>
            <div className="card-body bg-[#F1F6F9] rounded w-4/5 mx-auto mt-12">

              <form onSubmit={handelAdded}>

              <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Pictur URL</span>
                    </label>
                    <input type="text" placeholder="Pictur URL" required name='picter' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Car Name</span>
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
                    <input type="text" placeholder="Like sports, Bus,Truck etc" required name='SubCategory' className="input input-bordered" />
                </div>
               <div className="grid grid-cols-3 gap-4 ">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Price</span>
                    </label>
                    <input type="number" placeholder="Price," required name='Price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Rating</span>
                    </label>
                    <input type="number" placeholder="rating" required name='rating' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Quantity</span>
                    </label>
                    <input type="number" placeholder="Available quantity" required name='quantity' className="input input-bordered" />
                </div>
                
               </div>
               <div className="form-control">
                   {/* <input type="button" value="Submit"  className=" "/> */}
                   <input type="submit" className="btn bg-[#394867] text-white p-4 mt-4" />
                </div>
              </form>
            </div>

        </div>
    );
};

export default AddedToy;