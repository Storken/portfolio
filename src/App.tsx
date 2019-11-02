import React from 'react';
import './App.css';
import Home from './views/home/Home';
import About from './views/about/About';
import Projects from './views/projects/Projects';
import Loading from './views/loading/Loading';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Loading />
    </div>
  );
}

export default App;
