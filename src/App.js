import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Experience from "./components/experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from './components/contact/Contact';
import FindMeOnLinkedin from "./components/find-me-on-linkedin/FindMeOnLinkedin";
import Footer from './components/footer/Footer';
import EmailWrapper from "./components/email-wrapper/EmailWrapper";
import GoTop from "./components/go-top/GoTop";

function App() {
  return (
      <>
          <div className="w-full h-1 bg-slate-500"></div>
          <Header/>
          <Intro/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
          <FindMeOnLinkedin/>
          <Footer/>
          <div className="w-full h-1 bg-slate-500"></div>

          <EmailWrapper/>
          <GoTop/>
      </>
  );
}

export default App;
