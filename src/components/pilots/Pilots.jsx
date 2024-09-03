import React, { useContext } from "react";
import { StarWarsContext } from "../../context/StarWarsContext";

const Pilots = () => {
  const { pilots, selectedStarshipId } = useContext(StarWarsContext);
  const pilotList = pilots[selectedStarshipId] || [];

  const getPilotIdFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <div className="mb-5">
      <div className="p-4 mx-auto container my-5 border-t border-b">
        <p className="text-gray-300 uppercase font-semibold">PILOTS</p>
      </div>
      <div className="flex container mx-auto">
        {pilotList.length === 0 ? (
          <p>No pilots for this starship.</p>
        ) : (
          <div className="flex ">
            {pilotList.map((pilot) => {
              const pilotId = getPilotIdFromUrl(pilot.url);
              const pilotImage = `https://starwars-visualguide.com/assets/img/characters/${pilotId}.jpg`;

              return (
                <div className="mr-3" key={pilot.url}>
                  <img
                    className="rounded-t-lg max-w-full max-h-72"
                    src={pilotImage}
                    alt={`Pilot ${pilot.name}`}
                    onError={(e) => {
                      e.target.src = "/placeholda.png";
                    }}
                  />
                  <p className="uppercase bg-gray-700 text-gray-300 text-center rounded-b-lg py-1">
                    {" "}
                    {pilot.name}
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

export default Pilots;
