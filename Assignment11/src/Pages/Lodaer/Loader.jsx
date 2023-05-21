import  { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Loader = () => {
    const {loader} = useContext(AuthContext)

    if (loader) {
        <h3>
            loading....
        </h3>
    }

    return (
        <div>
            
        </div>
    );
};

export default Loader;