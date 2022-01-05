import React from 'react';
import './App.scss';

import Hello from "./components/Hello/Hello";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";


function App() {
  return (
      <div className="main">
        <Hello href="https://github.com/listentotheconscience"/>
        <About/>
        <Projects/>
        <Footer/>
      </div>
  );
}




export default App;