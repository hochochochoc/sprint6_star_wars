import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SubHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome =
    location.pathname === "/" &&
    (location.hash === "" || location.hash === "#");

  const isStarShips =
    location.pathname.startsWith("/main") ||
    location.pathname.startsWith("/starship");

  return (
    <div className="flex justify-center border-t border-b mb-2">
      <a
        className={`p-3 border-l border-r ${isHome ? "border-b-2" : ""}`}
        href="#"
        onClick={() => navigate("/")}
      >
        HOME
      </a>
      <a
        className={`p-3 border-l border-r ${isStarShips ? "border-b-2" : ""}`}
        href="#"
        onClick={() => navigate("/main")}
      >
        STARSHIPS
      </a>
    </div>
  );
};

export default SubHeader;
