import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Movie from "./components/Movie/Movie";
import SingleMovie from "./pages/SingleMovie/SingleMovie";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/Movie/:id" children={<Movie />}>
          <SingleMovie />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
