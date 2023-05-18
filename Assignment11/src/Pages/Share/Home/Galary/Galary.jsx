import galary1 from '../../../../assets/galary/galary1.jpg'
import galary2 from '../../../../assets/galary/galary2.jpg'
import galary3 from '../../../../assets/galary/galary3.jpg'
import galary4 from '../../../../assets/galary/galary4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Galary = () => {
    return (
        <div className="bg-[#212A3E]">
            <p className='text-center text-2xl font-bold text-white underline underline-offset-8'>A galary Of A Toy-Cars</p>
            <div className="grid grid-cols-2 md:grid-cols-4  p-10 justify-center items-center gap-8">
            <div>
                <div className='flex flex-col justify-center items-center gap-2 hover:scale-[1.1] duration-200'>
                <img src={galary1} alt="" className='rounded-full w-60' />
                <h5 className='text-white link link-hover'>Lamborghini Green</h5>
                </div>
                </div>
                <div>
                <div className='flex flex-col justify-center items-center gap-2 hover:scale-[1.1] duration-300'>
                <img src={galary2} alt="" className='rounded-full w-60' />
                <h5 className='text-white link link-hover'>Lamborghini white</h5>
                </div>
                </div>
                <div>
                <div className='flex flex-col justify-center items-center gap-2 hover:scale-[1.1] duration-300'>
                <img src={galary3} alt="" className='rounded-full w-60' />
                <h5 className='text-white link link-hover'>Lamborgeni Dark-Red</h5>
                </div>
                </div>
                <div>
                <div className='flex flex-col justify-center items-center gap-2 hover:scale-[1.1] duration-300'>
                <img src={galary4} alt="" className='rounded-full w-60' />
                <h5 className='text-white link link-hover'>Lamborgeni yellow</h5>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Galary;