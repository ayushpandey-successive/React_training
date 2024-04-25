/*Create an HOC named withAuth that restricts access to a specific component to authenticated users only. Implement this HOC on a sample component and demonstrate how it protects routes.*/
import React from 'react';
import { Navigate, Redirect } from 'react-router-dom'; 
import Login from './Login';

const WithAuth = (WrappedComponent) => {
  return function WithAuth(props) {
   
    const isAuthenticated = localStorage.getItem('login')

    if (isAuthenticated!=="true") {
      
      return <Navigate to="/login" />;
    }

   
    return <WrappedComponent {...props} isAuthenticated={isAuthenticated} />;
  };
};

export default WithAuth;