import {  useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const locatio = useLocation()
    const  {user,loader} =useContext(AuthContext)
    if (loader) {
        return <div className='flex justify-center items-center h-full mt-80'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to='/login' state={{from : locatio?.pathname}} replacc></Navigate>
};

export default PrivateRout;