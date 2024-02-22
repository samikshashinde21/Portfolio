import React from "react"
import "./education.css"

const Education = () => {
  return (
    <section id="education">
      <h5>Learn Lead Inspire</h5>
      <h2>Education</h2>
      <div className="container educations__container">
        <article className="education">
          <div className="education__head">
            <h3>B. Tech (E&TC)</h3>
          </div>
          <ul className="education__list">
            <li>
              <p>Vishwakarma Institute of Information Technology , Pune.</p>
            </li>
            <li>
              <p>Status : Pursuing 2020-2024</p>
            </li>
            <li>
              <p>Result : 7.70 CGPA </p>
            </li>
          </ul>
        </article>
        {/* END OF Btech */}
        <article className="education">
          <div className="hello">
            <div className="education__head">
              <h3>12th HSC</h3>
            </div>
            <ul className="education__list">
              <li>
                <p>Sitabai Sangai Junior College, Amravati.</p>
              </li>
              <li>
                <p>Status : Passed 2020</p>
              </li>
              <li>
                <p>Result : 82.77%</p>
              </li>
            </ul>
          </div>
        </article>
        {/* END OF HSC*/}
        <article className="education">
          <div className="education__head">
            <h3>10th SSC</h3>
          </div>
          <ul className="education__list">
            <li>
              <p>Sitabai Sangai School, Amravati.</p>
            </li>
            <li>
              <p>Status : Passed 2018</p>
            </li>
            <li>
              <p>Result : 94.20%</p>
            </li>
          </ul>
        </article>
        {/* END OF Content */}
      </div>
    </section>
  )
}

export default Education
