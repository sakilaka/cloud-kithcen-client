import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthUserContext';

const PrivateRoute = ({children}) => {

    const { user, load } = useContext(AuthContext);
    const location = useLocation();
    if (load) {
        return <p className='text-red-500 text-xl mt-5'>loading.......</p>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;