import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loader } = useContext(AuthContext);
	const location = useLocation();

	if (loader) {
		return <div>loading....</div>;
	}
	if (user) {
		return children;
	} else {
		return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
	}
};

export default PrivateRoute;
