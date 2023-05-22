import React, { useState } from "react";

function App() {
  // setInterval(time, 1000);

  let [time, func] = useState(0);

  function setTime() {
    let newTime = new Date().toLocaleTimeString();
    func(newTime);
  }

  return (
    <div className="container">
      <h1>{[time]}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
