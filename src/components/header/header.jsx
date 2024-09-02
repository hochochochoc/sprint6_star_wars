import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <header>
      <nav className="border-gray-200 px-4 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center w-auto">
            <div className="w-20"></div>
          </div>
          <div className="flex items-center w-auto">
            <div className="w-20"></div>
          </div>
          <div className="flex items-center w-auto">
            <div className="w-10"></div>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <div className="h-12 w-auto lg:h-24 lg:w-auto">
              <img
                src="/logo.png"
                alt="headline_img"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center">
            {userLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate("/");
                    });
                  }}
                  className="mr-3"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <>
                <Link className="mr-3" to={"/login"}>
                  LOGIN
                </Link>
                <Link className="mr-3" to={"/register"}>
                  REGISTER
                </Link>
              </>
            )}
            <a href="#" onClick={() => navigate("/")}>
              MENU
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
