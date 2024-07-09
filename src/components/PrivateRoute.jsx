// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = UserAuth();

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/" replace />} // Use Navigate with replace to avoid adding to history stack
    />
  );
};

export default PrivateRoute;
