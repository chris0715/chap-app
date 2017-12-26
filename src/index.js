import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { addUser } from './actions'
import setupWebSocket from './socket-client'
import createSagaMiddleware from 'redux-saga'
import handleNewMessage from './handleNewMessage'
import Chance from 'chance'
const chance = new Chance()

let username = chance.first()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// store.dispatch(addUser('me'))

const socket = setupWebSocket(store.dispatch, username)
  sagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
