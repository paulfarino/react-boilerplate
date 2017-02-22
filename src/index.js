
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Dashboard from './components/Dashboard';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'

const store = createStore (
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
