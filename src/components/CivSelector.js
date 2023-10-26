import React from 'react';

const CivSelector = ({ civs, onCivSelect }) => {
  return (
    <div className="civ-selector-container">
      <label htmlFor="civilizations" className="civ-selector-label">Elíja una civilización</label>
      <select
        id="civilizations"
        className="civ-selector-dropdown"
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
