import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [info, setInfo] = React.useState(false);
  const handleClick = () => {
    setInfo(true);
  };
  return (
    <div id="main">
      <button id="click" key="click" onClick={handleClick}>
        click
      </button>
      {info ? (
        <p id="para" key="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
