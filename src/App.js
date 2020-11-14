import React from "react";
import GlobalStyles from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={signIn} />
        <Route path="/sign-up" component={signUp} />
      </Switch>
    </Router>
  );
}

export default App;
