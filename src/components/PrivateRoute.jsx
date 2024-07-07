import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = UserAuth(); // Access the user object from the auth context

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
