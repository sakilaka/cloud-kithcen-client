import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {

    const { user, load } = useContext(AuthUserContext);
    const location = useLocation();

    if (load) {
        return <p className='text-red-500 text-center text-4xl my-20'>Loading.......</p>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;