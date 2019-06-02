import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux
import store from './store';

import Triangulator from './views/triangulator';

class Router extends React.Component {
  render() {
    return (
      <Provider store={store.store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Triangulator} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Router;
