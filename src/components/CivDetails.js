import React from 'react';

const CivDetails = ({ civ }) => {
  return civ ? (
    <div className="container mx-auto bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{civ.name}</h2>
      <p className="mb-1">
        <span className="font-medium">Juegos Jugados:</span> {civ.total}
      </p>
      <p>
        <span className="font-medium">Juegos Ganados:</span> {civ.wins}
      </p>
    </div>
  ) : null;
}

export default CivDetails;
