import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Footer from './components/footer/Footer';

function App() {
  return (
      <>
          <div className="w-full h-1 bg-slate-500"></div>
          <Header/>
          <Intro/>
          <Footer/>
          <div className="w-full h-1 bg-slate-500"></div>
      </>
  );
}

export default App;
