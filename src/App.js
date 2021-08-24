import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DeckForm from './component/DeckForm';
import StartDistribution from './component/StartDistribution'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <DeckForm/>
          </Route>
          <Route path="/start/:num">
            <StartDistribution/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
