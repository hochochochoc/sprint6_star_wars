import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ canActivate, redirectPath = "/" }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

<ProtectedRoute></ProtectedRoute>;
