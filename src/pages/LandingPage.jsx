import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { StarWarsContext } from "../context/StarWarsContext";

const LandingPage = () => {
  const {
    starships,
    currentPage,
    totalPages,
    isLoading,
    error,
    setCurrentPage,
  } = useContext(StarWarsContext);

  const observer = useRef();

  const lastStarshipElementRef = useRef();

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && currentPage < totalPages) {
        setTimeout(() => {
          setCurrentPage((prevPage) => prevPage + 1);
        }, 1000);
      }
    });

    if (lastStarshipElementRef.current) {
      observer.current.observe(lastStarshipElementRef.current);
    }
  }, [isLoading, currentPage, totalPages]);

  if (isLoading && currentPage === 1) return <p>Loading...</p>;
  if (error) return <p>Error loading starships: {error.message}</p>;

  return (
    <>
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
              <a
                href="#"
                className="text-white font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                LOG IN
              </a>
              <a
                href="#"
                className="text-white font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                SIGN UP
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div>
        {starships.map(({ name, model, url }, index) => {
          const starshipId = url.split("/").filter(Boolean).pop();
          return (
            <Link
              to={`/starship/${starshipId}`}
              key={url}
              ref={
                index === starships.length - 1 ? lastStarshipElementRef : null
              }
            >
              <div className="border-gray-100 border rounded-lg my-8 mx-10 px-4 py-4 bg-gray-900">
                <p>{name}</p>
                <p>{model}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {isLoading && currentPage > 1 && <p>Loading more ships...</p>}
    </>
  );
};

export default LandingPage;
