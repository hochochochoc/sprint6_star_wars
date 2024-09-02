import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import MainPage from "./pages/MainPage";
import LandingPage from "./pages/LandingPage";
import Ship from "./pages/Ship";
import Login from "./components/auth/login/login.jsx";
import Register from "./components/auth/register/register.jsx";
import "./index.css";
import ProtectedRoute from "./components/utils/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route element={<ProtectedRoute canActivate={true} />}>
          <Route path="/starship/:id" element={<Ship />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
