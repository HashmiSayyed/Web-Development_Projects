import React, { useState } from "react";

function CreateArea(props) {
  let [note, setNote] = useState({
    title: "",
    content: ""
  });

  let [isActive, setState] = useState(false);

  function handleChange(event) {
    let { name, value } = event.target;
    setNote((pre) => {
      return { ...pre, [name]: value };
    });
  }

  function handleFocus() {
    setState(true);
  }

  function handleSubmit(event) {
    props.onSubmit(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {isActive && (
          <input
            name="title"
            id="title"
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          name="content"
          id="content"
          onFocus={handleFocus}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isActive ? "3" : "1"}
          value={note.content}
        />
        {isActive && (
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
