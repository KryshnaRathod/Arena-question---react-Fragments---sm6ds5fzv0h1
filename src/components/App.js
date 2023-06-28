import React, { useState, useEffect, Fragment } from "react";
import '../styles/App.css';

import List from "./List";

const App = () => {
 
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);


const onButtonClick = () => {
    if (!value) {
      return;
    }
    const count = parseInt(value);
    if (isNaN(count) || count <= 0) {
      return;
    }
    const items = Array.from({ length: count }, (_, index) => ({
      id: `Item ${index + 1}`,
      valuex: `Item ${index + 1}`
    }));
    setList(items);
  };
 

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div id="main">

      <input id="input" onChange={onInputChange} />
      <button id="button" onClick={onButtonClick}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  );
};

export default App;
