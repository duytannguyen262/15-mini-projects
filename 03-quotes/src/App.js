import React from "react";
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>quotes</h2>
          <div className="underline" />
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
