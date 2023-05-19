import car1 from '../../../../assets/carr1.jpg'
import car2 from '../../../../assets/carr2.jpg'
import car3 from '../../../../assets/carr3.jpg'
import ShopCatagory from '../../../ShapCatagory/ShopCatagory';
import Galary from '../Galary/Galary';

const Home = () => {
  return (
    <>
    {/* This is banner */}
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 items-center  border border-[#9BA4B5] justify-center'>
      
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={car1} className="w-full " />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
            
          </div>

        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={car2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>

          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={car3} className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
            
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center  '>
        <div className='md:py-28 py-10 bg-[#F1F6F9] w-full p-12'>
          <h3 className='md:text-6xl sm:text-4xl text-black font-bold'><span className=''>Discover joy</span> <br />  <span className='text-[#394867]'>&</span> wonder at our <br />magical toy store!</h3>

          <button className="btn mt-7">SHOP NOW</button>
        </div>

      </div>
    </div>
    {/* This is galary */}
    <div className='mt-28 mb-28'>
      <Galary />
    </div>
    {/* This is shop catagory */}
    <div className='mt-28 mb-28'>
      <ShopCatagory />
    </div>
    </>
  );
};

export default Home;