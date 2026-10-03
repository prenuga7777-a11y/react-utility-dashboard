import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="dashboard">
      <h1>React Utility Dashboard</h1>
      <p className="subtitle">
        Counter & Random Number Generator
      </p>

      <div className="cards">

        {/* Counter Section */}
        <div className="card">
          <h2>Counter</h2>

          <div className="counter-value">
            {count}
          </div>

          {count === 0 && (
            <p className="message">
              Minimum limit reached
            </p>
          )}

          <div className="buttons">
            <button className="increment" onClick={increment}>
              Increment
            </button>

            <button className="decrement" onClick={decrement}>
              Decrement
            </button>

            <button className="reset" onClick={reset}>
              Reset
            </button>
          </div>
        </div>

        {/* Random Number Section */}
        <div className="card">
          <h2>Random Number Generator</h2>

          <div className="random-value">
            {randomNumber === null
              ? "?"
              : randomNumber}
          </div>

          {randomNumber === null && (
            <p className="message">
              No number generated yet
            </p>
          )}

          <button
            className="generate"
            onClick={generateRandomNumber}
          >
            Generate Random Number
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;