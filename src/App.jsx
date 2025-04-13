import { useState } from "react";
import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
            <Route path="/Education" element={<Education />}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
        
      </BrowserRouter> */}

      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
