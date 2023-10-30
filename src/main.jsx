import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RateBody from './components/RateBody/RateBody.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './index.css'
import {legacy_createStore, applyMiddleware, compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import oldCurrencyReducer from './util/ReduxReducers/currencyReducer/oldCurrencyReducer.js'
import newCurrencyReducer from './util/ReduxReducers/currencyReducer/newCurrencyReducer.js'
import oldCurrencyPayload from './util/ReduxReducers/payloadReducer/oldCurrencyPayload.js'
import newCurrencyPayload from './util/ReduxReducers/payloadReducer/newCurrencyPayload.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let allReducers = combineReducers({
  oldCurrencyReducer,
  newCurrencyReducer,
  oldCurrencyPayload,
  newCurrencyPayload
})

const store = legacy_createStore(
  allReducers, 
  composeEnhancer(applyMiddleware(thunk))
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/rates" element={<RateBody />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
)
