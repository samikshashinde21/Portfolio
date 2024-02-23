import React from "react"
import "./project.css"
import IMG1 from "../../assets/portfolio/pharmacy.jpg"
import IMG2 from "../../assets/portfolio/badminton.jpg"
import IMG3 from "../../assets/portfolio/home.jpg"

const Projects = () => (
  <section id="portfolio" className="portfolio-section">
    <h5 style={{ color: "#fff" }}>Projects with Programming Languages</h5>
    <h2 style={{ color: "#2E8A99" }}>My Projects</h2>
    <div className="container portfolio__container">
      {/* New Projects Updated */}

      <article className="portfolio__item">
        <div className="portfolio__item-content">
          <img className="imageStyle" src={IMG1} alt="" />
          <h3>Pharmacy Management System </h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Live
            </a>
            <a href="" className="btn" target="_blank">
              Github
            </a>
          </div>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-content">
          <img className="imageStyle" src={IMG2} alt="" />
          <h3> Badminton Foul Detection </h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Live
            </a>
            <a
              href="https://github.com/samikshashinde21/Out-of-Bounds-Foul-Detection-in-Badminton"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-content">
          <img className="imageStyle" src={IMG3} alt="" />
          <h3>Home Services Booking </h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn" target="_blank">
              Live
            </a>
            <a
              href="https://github.com/samikshashinde21/Home-educations-Booking-Website-with-AI-Chatbot"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
)

export default Projects
