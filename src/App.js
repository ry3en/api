import "./styles/App.css";
import {useState} from "react";
import Characters from "./components/Characters";
function App() {
    const [search, stateSearch] = useState(true);

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <br/>
                    <h1 className="text-info">Rick and Morty</h1>
                    <br/>
                    <div className="container text-center">
                        <Characters/>
                    </div>
                </header>
            </div>

        </>
    );
}

export default App;
