import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const navigateTohome = () => {
    navigate("/home");
  };
  async function loginUser(user, pass) {
    console.log(user, pass);
    const url =
      "http://localhost:9090/users/signin?username=" + user + "&pass=" + pass;
    axios
      .post(url)
      .then((res) => {
        if (res.data != null) {
          const cookies = new Cookies();
          cookies.set("token", res.data, { path: "/" });
          console.log(cookies.get("token"));
          if (cookies.get("token") != null && cookies.get("token") !=="") {
            console.log("ok");
            navigateTohome();
          }else{
            document.getElementById("logform").reset();
          }
        } else {
          console.log("vide");
        }
      })
      .catch((err) => {
        document.getElementById("logform").reset();

        console.log(err);
      });
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.username, data.password);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src="./logo.png" alt="Logo" />
        Bienvenue
      </header>
      <div className="App-container">
        <div className="App-box">
          <p className="App-title">Connexion</p>
          <form id="logform" onSubmit={handleSubmit(onSubmit)}>
            <div className="App-group">
              <label htmlFor="username" className="form-label">
                Identifiants
              </label>
              <input
                type="text"
                className="form-input"
                {...register("username", { required: true })}
              />
              {errors.username && <p className="error">identifiant requis.</p>}
            </div>
            <div className="App-group">
              <label htmlFor="mdp" className="form-label">
                Mot de passe
              </label>
              <input
                type="password"
                className="form-input"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="error">mot de passe requis.</p>}
            </div>
          </form>
        </div>
        <input
          type="submit"
          form="logform"
          value="Connexion"
          className="btn-sumbit"
        />
      </div>
    </div>
  );
}

export default App;
