import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions] = useState(data);

  return (
    <>
      <section>
        <div className="container">
          <h3>Question and Answer about login</h3>
          <div>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
