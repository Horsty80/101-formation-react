import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App bg-kanoma-yellow-300">
      <div
        className="shadow-lg bg-white shadow-indigo-500/50 p-10 
      rounded-lg hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
      >
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          data-testid="app-logo"
        />
      </div>

      {/* navigation */}
      {/* main */}
      {/* topbar */}
      {/* cardboxs */}
      {/* details tables */}
    </div>
  );
}

export default App;
