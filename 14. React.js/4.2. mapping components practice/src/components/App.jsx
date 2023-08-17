import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function creat(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      em={emojipedia.emoji}
      title={emojipedia.name}
      data={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(creat)}</dl>
    </div>
  );
}

export default App;
