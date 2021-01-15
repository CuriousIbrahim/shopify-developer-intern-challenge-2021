import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  HomePage,
  AddPage,
  SearchPage,
} from "./pages";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/add">
          <AddPage />
        </Route>

        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
