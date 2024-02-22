//import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />  
      <Education/>
      <Experience />
      <Projects/>
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
