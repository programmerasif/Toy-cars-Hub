import Navebr from '../Pages/Share/Navbr/Navebr';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navebr />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;