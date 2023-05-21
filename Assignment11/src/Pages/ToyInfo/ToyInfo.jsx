
import pic from '../../assets/removeBg1.png'

const ToyInfo = () => {
    return (
        <div className='bg-[#212A3E] relative'>
          
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div className='text-white flex justify-center items-center mt-16 p-3'>
                        <div>
                            <h5 className='text-3xl font-semibold'>Lamborghini, luxury sports car</h5>
                            <h4 className='border p-5 mt-2'>Product type : Sports Car</h4>
                            <h4 className='border p-5 mt-2'>Product Weight : 1.1kg</h4>
                            <h4 className='border p-5 mt-2'>Product Color : Red</h4>
                            <h5 className='font-semibold mt-2'>Price :<span className='text-4xl font-bold'>15$</span></h5>
                            <button className='btn bg-[#9BA4B5] mt-5'>ADD TO CARD</button>
                        </div>
                </div>
                <div >
                    <img src={pic} alt="" data-aos="fade-down-left" data-aos-delay="50" data-aos-duration="1000"/>
                    <span className='text-3xl text-white bg-slate-400 p-3 absolute top-0 right-0 font-bold'>Hot Product</span>
                    </div>
            </div>
        </div>
    );
};

export default ToyInfo;