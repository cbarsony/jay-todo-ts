import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';
import Todo from './components/Todo';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Todo />
        </Route>
        <Route path="/login">
          <div>Login</div>
        </Route>
      </Switch>
    </Router>
  </Provider>
);
