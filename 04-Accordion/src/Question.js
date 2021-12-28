import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {isClicked && <p>{info}</p>}
      </article>
    </>
  );
};

export default Question;
