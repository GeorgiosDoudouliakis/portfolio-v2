import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import GoTop from "./components/go-top/GoTop";

function App() {
  return (
      <>
          <div className="w-full h-1 bg-slate-500"></div>
          <Header/>
          <Intro/>
          <About/>
          <Contact/>
          <Footer/>
          <div className="w-full h-1 bg-slate-500"></div>

          <GoTop/>
      </>
  );
}

export default App;
