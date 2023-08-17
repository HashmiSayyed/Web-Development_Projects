import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.em}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.data}</dd>
    </div>
  );
}

export default Entry;
