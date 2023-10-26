import CivilizationIcon from "./CivilizationIcon";

const CivDetails = ({ civ }) => {
  const imageUrl = `https://www.aoepulse.com/static/${civ?.left_image}`;

  return civ ? (
    <div className="civ-detail">
    <CivilizationIcon imageUrl={imageUrl} altText={civ.name}  />
      <h2>{civ.name}</h2>
      <p>
        <span>Juegos Jugados:</span> {civ.total}
      </p>
      <p>
        <span>Juegos Ganados:</span> {civ.wins}
      </p>
    </div>
  ) : null;
}

export default CivDetails;
