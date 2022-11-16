import React, {useState, useEffect} from "react";
import axios from "axios";
import Character from "./Character";

const Search = () => {
    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState("");


    const onChange = (e) => {
        console.log(e.target.value);
        if (e.target.name === "name") {
            setName(e.target.value);
        }
    };


    const url =
        "https://rickandmortyapi.com/api/character/?name=" + name.toString();

    useEffect(() => {
        axios.get(url).then((response) => {
            setCharacters(response.data.results);
        });
    });

    return (
        <>
            <div className="input-group mb-3 text-center">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre a buscar"
                    aria-describedby="basic-addon2"
                    name="name"
                    id="name"
                    value={name}
                    onChange={onChange}
                />
            </div>
            <div className="row">
                {characters.map((character) => {
                    return <Character key={character.id} character={character}/>;
                })}
            </div>
        </>
    );
};

export default Search;
