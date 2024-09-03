import React, { useContext } from "react";
import { StarWarsContext } from "../../context/StarWarsContext";

const Films = () => {
  const { films, selectedStarshipId } = useContext(StarWarsContext);
  const filmList = films[selectedStarshipId] || [];

  const getFilmIdFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <div className="mb-5">
      <div className="p-4 mx-auto container my-5 border-t border-b">
        <p className="text-gray-300 uppercase font-semibold">FILMS</p>
      </div>
      <div className="flex container mx-auto">
        {filmList.length === 0 ? (
          <p>No films for this starship.</p>
        ) : (
          <div className="flex ">
            {filmList.map((film) => {
              const filmId = getFilmIdFromUrl(film.url);
              const filmImage = `https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`;

              return (
                <div className="mr-3" key={film.url}>
                  <img
                    className="rounded-t-lg max-w-full max-h-72"
                    src={filmImage}
                    alt={`Film ${film.title}`}
                    onError={(e) => {
                      e.target.src = "/placeholda.png";
                    }}
                  />
                  <p className="uppercase bg-gray-700 text-gray-300 text-center rounded-b-lg py-1">
                    {" "}
                    {film.title}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Films;
