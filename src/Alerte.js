import "./App.css";

function Alerte() {
  return (
    <div className="App">
      <header className="App-header header-blue">Alertes</header>
      <div className="App-container">
        <div className="App-box App-interface left">
          <h2>Mes alertes </h2>
          <div className="App-row"></div>

          <div className="App-notif left">
            <a href="./alerte/1">
              <div className="App-user-name">
                <p> Total des alertes</p>
                <p>2 alertes</p>
              </div>
            </a>
            <div className="App-notif-item">
              <div className="App-notif-bar"></div>
              <div className="App-notif-container">
                <a href="./alerte/1">
                  <div className="App-notif-compte">
                    <h3>LIVRET A</h3>
                    <p>0123456789A</p>
                    <p>Mr Nom Prénom</p>
                  </div>
                  <div className="App-notif-text">
                    <p>-15,02€</p>
                    <p>15/05/2022</p>
                  </div>
                </a>
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

export default Alerte;
