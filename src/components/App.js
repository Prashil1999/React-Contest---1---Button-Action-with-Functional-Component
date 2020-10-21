import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [info, setInfo] = React.useState("");
  const handleClick = () => {
    setInfo(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };
  return (
    <div id="main">
      <button id="click" key="click" onClick={handleClick}>
        click
      </button>
      <p id="para" key="para">
        {info}
      </p>
    </div>
  );
}

export default App;
