import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notes, setNotes] = useState([]);

  function addNotes(noteTitle, noteContent) {
    setNotes((prevValue) => {
      return [...prevValue, { title: noteTitle, content: noteContent }];
    });
  }

  function deleteNotes(id) {
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea funcCreat={addNotes} />
      {notes.map((item, index) => (
        <Note
          funcDelete={deleteNotes}
          key={index}
          id={index}
          title={item.title}
          content={item.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
