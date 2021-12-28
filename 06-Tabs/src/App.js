import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <section className="section loading">Loading...</section>;
  }
  const { company, dates, duties, title } = jobs[value];

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline" />
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((job, index) => {
              return (
                <button
                  className={`job-btn ${index === value && "active-btn"}`}
                  key={job.id}
                  onClick={() => setValue(index)}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
