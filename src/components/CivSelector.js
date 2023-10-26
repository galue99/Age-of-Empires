import React from 'react';

const CivSelector = ({ civs, onCivSelect }) => {
  return (
    <div className="mb-4">
      <label htmlFor="civilizations" className="block mb-2 text-sm font-medium text-gray-700">Elíja una civilización</label>
      <select
        id="civilizations"
        className="p-2 border rounded-md focus:outline-none focus:border-blue-500 transition duration-150"
        onChange={(e) => onCivSelect(e.target.value)}
      >
        <option value="">Elíja una civilización</option>
        {civs.map((civ) => (
          <option key={civ.name} value={civ.name}>
            {civ.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CivSelector;
