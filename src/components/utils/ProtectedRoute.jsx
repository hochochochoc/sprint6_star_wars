import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

<ProtectedRoute></ProtectedRoute>;
