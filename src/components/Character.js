import React from "react";
const Character = ({ character }) => {
  return (
    <>
      <div className="col-md-4 mb-4 ">
        <div className="card">
          <img className="card-img-top" src={character.image} alt={character.name} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {character.name} <p></p>
              {character.st©atus} - {character.species}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Character;
