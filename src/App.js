import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Work,
  Blog,
} from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/work" exact component={() => <Work />} />
          <Route path="/blog" exact component={() => <Blog />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
