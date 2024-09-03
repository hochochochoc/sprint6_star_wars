import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import SubHeader from "../components/sub-header/subHeader";
import Pilots from "../components/pilots/Pilots";

const Ship = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
        const data = await response.json();
        setStarship(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStarship();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading starship: {error.message}</p>;

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

        <div className="container mx-auto  text-gray-300 flex flex-row pt-10 pb-20">
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
    </div>
  );
};

export default Ship;
