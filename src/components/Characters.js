import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const url =
    "https://rickandmortyapi.com/api/character?page=" + page.toString();

  useEffect(() => {
    axios.get(url).then((response) => {
      setCharacters(response.data.results);
    });
  });

  return (
    <>
      <div className="row">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
        
        <div className="row justify-content-around mb-5">
          <div className="col-4">
            <button className="btn btn-primary" onClick={() => setPage(page - 1)}>
              Anterior
            </button>
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
