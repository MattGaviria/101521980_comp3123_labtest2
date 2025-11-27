import KiIcon from "./KiIcon";

function CharacterCard({ character }) {
  const origin = character.originPlanet;

  return (
    <div className="card">
      {/* Top half: light background + image */}
    <div className="card-top">
        <img
        src={character.image}
        alt={character.name}
        className="card-image"
        />
    </div>

      {/* Bottom half: dark info area */}
    <div className="card-bottom">
        <h2 className="card-name">{character.name}</h2>

        <p className="card-subtitle">
          {character.race || "Unknown"}{" "}
          {character.gender ? `- ${character.gender}` : ""}
        </p>

        <div className="card-stats">
          <p>
            <span className="label">
              <KiIcon size={16} />  Base Ki:</span>
            <span className="value">{character.ki || "Unknown"}</span>
          </p>
          <p>
            <span className="label">Total Ki:</span>
            <span className="value">{character.maxKi || "Unknown"}</span>
          </p>
          <p>
            <span className="label">Affiliation:</span>
            <span className="value">
              {character.affiliation || "Unknown"}
            </span>
          </p>
          {origin && (
            <p>
              <span className="label">Origin:</span>
              <span className="value">
                {origin.name}
                {origin.isDestroyed ? " (Destroyed)" : ""}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
