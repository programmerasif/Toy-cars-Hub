import car1 from '../../../../assets/car1.jpg'
import car2 from '../../../../assets/car2.jpg'
import car3 from '../../../../assets/car3.jpg'

const Home = () => {
    return (
        <div className='mt-8'>
           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={car2} className="w-full md:h-[70vh] ms:h-[20px]" />

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/2">
      <div>
      <h3 className='md:text-6xl sm:text-4xl text-white font-bold'><span className=''>Discover joy</span> <br /> &  wonder at our <br />magical toy store!</h3>
      
      <button className="btn mt-7">SHOP NOW</button>
      </div>
    </div>
    </div>
   
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={car3} className="w-full h-[70vh] ms:h-[30vh]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/2">
      <div>
      <h3 className='md:text-6xl sm:text-4xl text-white font-bold'><span className=''>Discover joy</span> <br /> &  wonder at our <br />magical toy store!</h3>
      
      <button className="btn mt-7">SHOP NOW</button>
      </div>
    </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={car1} className="w-full h-[70vh] ms:h-[30vh]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/2">
      <div>
      <h3 className='md:text-6xl sm:text-4xl text-white font-bold'><span className=''>Discover joy</span> <br /> &  wonder at our <br />magical toy store!</h3>
      
      <button className="btn mt-7">SHOP NOW</button>
      </div>
    </div>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Home;