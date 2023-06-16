import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className='flex justify-center'>
                <span className="loading loading-infinity w-24"></span>
            </div>
        );
    }

    if (user) {
        return children
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;