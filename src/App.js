import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./logo.png" alt="Logo" />
        Bienvenue
      </header>
      <div className="App-container">
        <div className="App-box">
          <p className="App-title">Connexion</p>
          <form action="">
            <div className="App-group">
              <label htmlFor="username" className="form-label">
                Identifiants
              </label>
              <input type="text" className="form-input" />
            </div>
            <div className="App-group">
              <label htmlFor="mdp" className="form-label">
                Mot de passe
              </label>
              <input type="text" className="form-input" />
            </div>
          </form>
        </div>
        <Link to="/home" type="submit" className="btn-sumbit">
          Connexion
        </Link>
      </div>
    </div>
  );
}

export default App;
