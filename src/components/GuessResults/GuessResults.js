import React from "react";

import Guess from "../Guess/Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  // console.log("NUM_OF_GUESSES_ALLOWED", NUM_OF_GUESSES_ALLOWED)

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={guesses[num]} answer={answer} />;
      })}
    </div>
  );
}

export default GuessResults;
