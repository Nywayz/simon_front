import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route} from "react-router";
import {HashRouter} from "react-router-dom";
import RootNavigator from "./routes/RootNavigator";
import Accueil from "./components/Accueil";
import Jeu from "./components/Jeu";
import {Cache, Fond, JeuContainer} from "./styles/Accueil.style";

ReactDOM.render(
  <React.StrictMode>
      <Fond>
        <Accueil/>
        <Jeu/>
          <Cache id={'cache'}/>
      </Fond>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
