import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About/About";
import Error from "./components/pages/Error/Error";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Footer/Footer";
// import Movie from "./components/Movie/Movie";
import SingleMovie from "./components/pages/SingleMovie/SingleMovie";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
