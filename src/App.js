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
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/work" exact component={() => <Work />} />
            <Route path="/blog" exact component={() => <Blog />} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
