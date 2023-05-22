import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notes, setNotes] = useState([]);

  function handleSubmit(note) {
    setNotes((pre) => {
      return [...pre, note];
    });
  }

  function deleteNote(id) {
    setNotes((pre) => {
      return pre.filter((item, index) => {
        return !(index === id);
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit={handleSubmit} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onClk={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
