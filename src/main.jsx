import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './index.css'
import {legacy_createStore,applyMiddleware, compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import currencyReducer from './util/ReduxReducers/currencyReducer/currencyReducer.js'
import payloadReducer from './util/ReduxReducers/payloadReducer/payloadReducer.js'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let allReducers = combineReducers({
  currencyReducer,
  payloadReducer
})

const store = legacy_createStore(allReducers, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
)
