import React, { useState, useEffect } from "react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"
import Typewriter from "typewriter-effect"

const Home = () => {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Typewriter effect for the second line
    const introText2 = "I'm a Full Stack Developer."
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= introText2.length) {
        setShowText(introText2.slice(0, currentIndex))
        currentIndex++
      } else {
        currentIndex = 0
        setShowText("")
      }
    }, 100) // Adjust the speed of typing here

    return () => clearInterval(interval)
  }, [])

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b ">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        {/* Second line with Typewriter effect */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h2
            style={{ fontSize: "2rem", color: "#84A7A1" }}
            className="text-5xl sm:text-7xl font-bold text-white"
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ["I'm a Full Stack Developer"],
                cursor: "",
              }}
            />
          </h2>
          {/* Uncomment to show the first line */}
          {/* <h3 style={{ marginBottom: "0.5rem", fontSize: "2.5rem" }}>{showText}</h3> */}
          <p className="text-gray-500 text-opacity-70 py-4 max-w-md text-justify font-bold">
            I have 2 years of experience in web development, specializing in
            projects using the MERN stack. With a strong foundation in
            JavaScript, I excel in creating dynamic and responsive web
            applications.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              style={{ backgroundColor: "#2E8A99" }}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Commented out the photo */}
        {/* <div className="md:w-1/2">
          <img src={profilePic} alt="Profile" className="mx-auto" />
        </div> */}
      </div>
    </div>
  )
}

export default Home
