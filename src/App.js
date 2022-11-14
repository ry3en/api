import "./styles/App.css";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-white">Rick and Morty</h1>
        <div className="container text-center">
          <Characters />
        </div>
      </header>
    </div>
  );
}

export default App;
