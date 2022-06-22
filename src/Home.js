import "./App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header header-blue">
        Acceuil
        <p>Dernière connexion : le 06 Avril 2022 </p>
      </header>
      <div className="App-container">
        <div className="App-box App-interface">
          <hr />
          <h2>Mes dernières alertes</h2>

          <div className="App-notif">
            <div className="App-notif-item">
              <div className="App-notif-bar"></div>
              <div className="App-notif-container">
                <div className="App-notif-compte">
                  <h3>LIVRET A</h3>
                  <p>0123456789A</p>
                  <p>Mr Nom Prénom</p>
                </div>
                <div className="App-notif-text">
                  <p>-15,02€</p>
                  <p>15/05/2022</p>
                </div>
              </div>
            </div>
            <div className="App-notif-item">
              <div className="App-notif-bar"></div>
              <div className="App-notif-container">
                <div className="App-notif-compte">
                  <h3>LIVRET A</h3>
                  <p>0123456789A</p>
                  <p>Mr Nom Prénom</p>
                </div>
                <div className="App-notif-text">
                  <p>-15,02€</p>
                  <p>15/05/2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="App-footer">
          <div className="App-btn">
            <a href="./home">
              <div className="App-btn-img active-btn">
                <img src="./home.png" alt="home" />
              </div>
              <span>Acceuil</span>
            </a>
          </div>
          <div className="App-btn">
            <a href="./compte">
              <div className="App-btn-img">
                <img src="./contact.png" alt="compte" />
              </div>
              <span>Comptes</span>
            </a>
          </div>
          <div className="App-btn">
            <a href="./alerte">
              <div className="App-btn-img">
                <img src="./alert.png" alt="alert" />
              </div>
              <span>Alertes</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
