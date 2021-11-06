import React from 'react';
import ReactDOM from 'react-dom';
import HomePlans from './components/HomePlans'
import Lots from './components/Lots'
import SideNav from './components/SideNav'
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <SideNav />
          <Switch>
            <Route exact path='/homes' component={HomePlans} />
            <Route path='/lots' component={Lots} />
            <Redirect from="/" to="/homes" />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Router>
      </>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))