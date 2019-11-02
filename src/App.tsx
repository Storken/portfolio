import React from 'react';
import './App.css';
import Home from './views/home/Home';
import About from './views/about/About';
import Projects from './views/projects/Projects';
import Loading from './views/loading/Loading';
import Footer from './views/footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Footer />
      <Loading />
    </div>
  );
}

export default App;
