import "./App.css";

function Comptedetails() {
  return (
    <div className="App">
      <header className="App-header header-blue">Détail du compte</header>
      <div className="App-container">
        <div className="App-box App-interface">
          <h2>Livret A</h2>
          
        </div>
        <footer className="App-footer">
          <div className="App-btn">
            <a href="../home">
              <div className="App-btn-img active-btn">
                <img src="../home.png" alt="home" />
              </div>
              <span>Acceuil</span>
            </a>
          </div>
          <div className="App-btn">
            <a href="../compte">
              <div className="App-btn-img">
                <img src="../contact.png" alt="compte" />
              </div>
              <span>Comptes</span>
            </a>
          </div>
          <div className="App-btn">
            <a href="../alerte">
              <div className="App-btn-img">
                <img src="../alert.png" alt="alert" />
              </div>
              <span>Alertes</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Comptedetails;
