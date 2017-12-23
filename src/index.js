import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { addUser } from './actions'

const store = createStore(reducers)
store.dispatch(addUser('me'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker();
