import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
// eslint-disable-next-line react/prop-types
  const {title, genre, data} = props;

  return <Main title={title} genre={genre} data={data}/>;
};

export default App;
