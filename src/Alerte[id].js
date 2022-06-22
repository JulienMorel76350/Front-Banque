import "./App.css";

function Alertedetails() {
  return (
    <div className="App">
      <header className="App-header header-blue">Compte Courant</header>
      <div className="App-container">
        <div className="App-box App-interface">
          <h2>Solde au 21/06/2022</h2>
          <h4>-15,02€</h4>
          <h2>Mr Nom Prénom</h2>
          <span>N°1234567A123</span>
        </div>

        <div className="App-detail-container">
          <div className="App-detail">
            <h3>Lundi 20 Juin 2022</h3>
            <div className="App-details">
              <div className="App-details-user">
                <p>Client</p>
                <p>Id compte</p>
              </div>
              <p>+10,00€</p>
            </div>
          </div>
          <div className="App-detail">
            <h3>Samedi 18 Juin 2022</h3>
            <div className="App-details">
              <div className="App-details-user">
                <p>Client</p>
                <p>Id compte</p>
              </div>
              <p>+13,00€</p>
            </div>
          </div>
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

export default Alertedetails;
