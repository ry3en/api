import React from "react";
import "../../src/styles/character.css";

const Character = ({ character }) => {
  return (
    <>
      <div className="characterCard col">
        <img src={character.image} alt={character.name}></img>
        <div className="section">
          <a>
            <h2>{character.name}</h2>
          </a>
          <span class="status">
            <span class="status__icon"></span> {character.status} -{" "}
            {character.species©}
          </span>
        </div>
      </div>
      <div className="infoCharacter">

      </div>©
    </>
  );
};

export default Character;
