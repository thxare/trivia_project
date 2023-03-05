import React, { useEffect, useState } from "react";
export const TriviaApp = () => {
  const [option, setOption] = useState([
    "movies",
    "music",
    "science",
    "history",
  ]);
  return (
    <div>
      <h1 className="font-sans">Welcome to Trivia Game!</h1>
      <form id="form" autocomplete="off">
        <label for="fname">Choose a name:</label>
        <input type="text" id="input_name" />
      </form>

      <label id="category_label">Choose a category:</label>
      <select id="category" name="category" form="categoryform">
        {option.map((op) => {
          return <option value={op}>{op}</option>;
        })}
      </select>
      <button type="button" id="btn_start">
        Start
      </button>
    </div>
  );
};
