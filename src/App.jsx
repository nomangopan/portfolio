import AboutDev from "./components/Aboutdev/AboutDev";
import AboutMe from "./components/aboutme/Aboutme";
import Education from "./components/education/Education";
import Header from "./components/header/Header";
import Projects from "./components/project/Projects";
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="website-layout">
        <AboutMe />
        <AboutDev />
        <Projects />
        <Education />
      </div>
    </div>
  );
};

export default App;