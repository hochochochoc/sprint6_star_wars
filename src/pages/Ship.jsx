import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import SubHeader from "../components/sub-header/subHeader";
import Pilots from "../components/pilots/Pilots";
import Films from "../components/films/Films";
import { StarWarsContext } from "../context/StarWarsContext";

const Ship = () => {
  const { id } = useParams();
  const {
    starships,
    isLoading,
    error,
    fetchPilotsForStarship,
    fetchFilmsForStarship,
    setSelectedStarshipId,
  } = useContext(StarWarsContext);

  const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  useEffect(() => {
    setSelectedStarshipId(id);
    fetchPilotsForStarship(id);
    fetchFilmsForStarship(id);
  }, [
    id,
    setSelectedStarshipId,
    fetchPilotsForStarship,
    fetchFilmsForStarship,
  ]);

  const starship = starships.find((starship) => starship.url.includes(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading starship: {error.message}</p>;
  if (!starship) return <p>No starship found.</p>;

  return (
    <div>
      <Header />
      <SubHeader />
      <div
        className="px-10"
        style={{
          backgroundImage: "url('/death_star_2.png')",
          backgroundSize: "contain",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-4 mx-auto container my-5 border-t border-b">
          <p className="text-gray-300 uppercase font-semibold">STARSHIP</p>
        </div>

        <div className="container mx-auto text-gray-300 flex flex-row pt-10 pb-20">
          <img
            className="rounded-l-lg max-w-full max-h-96"
            src={image}
            alt={`Ship ${id}`}
            onError={(e) => {
              e.target.src = "/placeholda.png";
            }}
          />
          <div className="bg-gray-700 p-3 border-l rounded-r-lg">
            <h1 className="text-3xl uppercase mb-4">{starship.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, eget id
              ultrices nisl blandit integer sollicitudin lacinia, aenean lacus
              etiam eros nascetur himenaeos.
            </p>
            <br />
            <div className="flex flex-row ">
              <div className="mr-3">
                <p className="">Model: {starship.model}</p>
                <p className="">Cost in credits: {starship.cost_in_credits}</p>
                <p className="">
                  Atmospheric Speed: {starship.max_atmosphering_speed}
                </p>
              </div>
              <div>
                <p className="">Manufacturer: {starship.manufacturer}</p>
                <p className="">Length: {starship.length}</p>
                <p className="">Crew: {starship.crew}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pilots />
      <Films />
    </div>
  );
};

export default Ship;
