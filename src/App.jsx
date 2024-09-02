import LandingPage from "./pages/LandingPage";
import Ship from "./pages/Ship";
import { Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/starship/:id" element={<Ship />} />
    </Routes>
  );
}

export default App;
