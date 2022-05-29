import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Home from "./components/Home";
import Task from "./components/Task";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/task" element={<Task/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>    
  );
}

export default App;
