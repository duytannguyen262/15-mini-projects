import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handlePrevPerson = () => {
    index > 0 ? setIndex(index - 1) : setIndex(people.length - 1);
  };

  const handleNextPerson = () => {
    index < people.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  const handleRandomPerson = () => {
    const randomIndex = Math.round(Math.random() * (people.length - 1));
    setIndex((prevIndex) => {
      if (prevIndex === randomIndex) {
        if (randomIndex === people.length - 1) {
          return 0;
        }
        return randomIndex + 1;
      }
      return randomIndex;
    });
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={handlePrevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={handleRandomPerson}>
          Suprise Me!
        </button>
      </article>
    </>
  );
};

export default Review;
