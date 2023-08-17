import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [headingText, setHText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
