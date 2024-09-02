import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div className="container mx-auto px-4">
      <img src={image} alt={`Ship ${id}`} />
      <h1 className="text-3xl text-white mb-4">{starship.name}</h1>
      <p className="text-white">Model: {starship.model}</p>
      <p className="text-white">Cost in credits: {starship.cost_in_credits}</p>
      <p className="text-white">
        Atmospheric Speed: {starship.max_atmosphering_speed}
      </p>
      <p className="text-white">Manufacturer: {starship.manufacturer}</p>
      <p className="text-white">Length: {starship.length}</p>
      <p className="text-white">Crew: {starship.crew}</p>
    </div>
  );
};

export default Ship;
