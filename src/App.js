import "./styles/App.css";
import {useState} from "react";
import Characters from "./components/Characters";
import Search from "./components/search";
function App() {
    const [search, stateSearch] = useState(true);

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 className="text-info">Rick and Morty</h1>

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={() => stateSearch(false)}>Iniciar Busqueda</button>
                        <button type="button" className="btn btn-primary" onClick={() => stateSearch(true)}>Terminar Busqueda</button>
                    </div>
                    <br/>
                    <div className="container text-center">
                        {search === true ? (
                            <Characters/>
                        ) : (
                            <Search/>
                        )}

                    </div>
                </header>
            </div>

        </>
    );
}

export default App;
