import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'Components/Header/Header';
import Main from 'Pages/Main';
import GlobalStyles from 'Components/GlobalStyles';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
