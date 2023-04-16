import React, { useState } from "react";

function GuessInput({ handleGuessSubmit, endGame }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuessSubmit(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="guess-input">Enter guess: </label>
        <input
          id="guess-input"
          type="text"
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={tentativeGuess}
          onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
          disabled={endGame}
        />
      </form>
    </div>
  );
}

export default GuessInput;
