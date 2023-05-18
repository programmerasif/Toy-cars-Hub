import Navebr from '../Pages/Share/Navbr/Navebr';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navebr />
            <div className='sm:w-full md:w-[90%] mx-auto min-h-[90vh]'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;