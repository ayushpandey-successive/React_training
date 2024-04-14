import React from 'react';
import WithAuth from './WithAuth'; // Import the HOC
import { Navigate, Outlet , Redirect} from 'react-router-dom';

const ProtectedComponent = (props) => {

//const auth = localStorage.getItem("login")

  return (
    <div>
     {
        props.isAuthenticated==="true" ? <Outlet/> : <Navigate to="/login" />
     }
    </div>
  );
};

// Wrap the component with the withAuth HOC
export default WithAuth(ProtectedComponent);