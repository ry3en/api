import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";
import "../../src/styles/character.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCharacters(response.data.results);
    });
  }, []);

  console.log(characters);

  return (
    <>
      <article className="principal row">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </article>
    </>
  );
};

export default Characters;
