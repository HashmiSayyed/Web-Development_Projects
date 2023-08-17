import React, { useState } from "react";

function CreateArea(props) {
  let [noteTitle, setNoteTitle] = useState("");
  let [noteContent, setNoteContent] = useState("");

  function handleChangeTitle(event) {
    let newTitle = event.target.value;
    setNoteTitle(newTitle);
  }

  function handleChangeContent(event) {
    let newContent = event.target.value;
    setNoteContent(newContent);
  }

  return (
    <div>
      <form id="form">
        <input
          onChange={handleChangeTitle}
          name="title"
          placeholder="Title"
          value={noteTitle}
        />
        <textarea
          onChange={handleChangeContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteContent}
        />
        <button
          type="submit"
          onClick={(event) => {
            props.funcCreat(noteTitle, noteContent);
            event.preventDefault();
            setNoteTitle("");
            setNoteContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
