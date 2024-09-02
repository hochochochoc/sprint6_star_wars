import React, { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StarWarsContext } from "../context/StarWarsContext";
import Header from "../components/header/header";

const MainPage = () => {
  const {
    starships,
    currentPage,
    totalPages,
    isLoading,
    error,
    setCurrentPage,
  } = useContext(StarWarsContext);

  const navigate = useNavigate();

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
      <Header />

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

export default MainPage;
