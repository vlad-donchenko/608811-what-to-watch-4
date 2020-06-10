import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const film = {
  title: `The Grand Budapest Hotel`,
  data: new Date().getFullYear(),
  genre: `Drama`
};

const init = () => {
  ReactDOM.render(<App title={film.title} data={film.data} genre={film.genre}/>, document.querySelector(`#root`));
};

init();
