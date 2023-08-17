import React, { useState } from "react";

function App() {
  let [inputText, setInputText] = useState("");
  let [notes, setNotes] = useState([]);

  function handleChange(event) {
    let newText = event.target.value;
    setInputText(newText);
  }

  function handleClick() {
    setNotes((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  function creatNote(item) {
    return <li>{item}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>{<ul>{notes.map(creatNote)}</ul>}</div>
    </div>
  );
}

export default App;
