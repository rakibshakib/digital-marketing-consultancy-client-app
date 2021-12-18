import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
    // const { user, admin, isLoading } = useAuth();
    const { user, isLoading } = useSelector((state) => state.services);
    const location = useLocation();
    if (isLoading) { return <CircularProgress /> }
    if (user.email ) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;