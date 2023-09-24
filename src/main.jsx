import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './index.css'
import {legacy_createStore,applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import currencyReducer from './util/ReduxReducers/currencyReducer/currencyReducer.js'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(currencyReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
)
