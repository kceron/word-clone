import React from "react";
import { checkGuess } from "../../game-helpers";

import { range } from "../../utils";

function Cell({ letter, status }) {
  return <span className={`cell ${status ? status : ''}`}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  // console.log("Guess- result:", result);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <Cell
            key={num}
            letter={result ? result[num].letter : null}
            status={result ? result[num].status : null}
          />
        );
      })}
    </p>
  );
}

export default Guess;
