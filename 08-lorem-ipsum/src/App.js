import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
      setCount(amount);
    }
    if (count > data.length) {
      amount = data.length;
      setCount(amount);
    }
    setText(data.slice(0, amount));
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <>
      <section className="section-center">
        <h3>Tired of boring lorem ipsums?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
