
import React, { use } from "react";
import { Navigate, useLocation } from "react-router";

import Loader from "../Components/Loader/Loader";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  
  const location = useLocation();
  
  if (loading) {
    return <Loader></Loader>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/signin"></Navigate>;


};

export default PrivateRoute;