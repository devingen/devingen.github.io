import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from "../../pages/home/HomePage";
import { SamplesPage } from "../../pages/samples";
import { NavLeft } from "../NavLeft/NavLeft";

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className='content'>
          <NavLeft />

          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/samples" component={SamplesPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
