import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createBrowserHistory } from "history"
// import { routerMiddleware } from "react-router-redux"
import promiseMiddleware from "redux-promise-middleware"
// import logger from "redux-logger"

import rootReducers from "../reducers"

// const routeMiddleware = routerMiddleware(createBrowserHistory())

const middlewares = applyMiddleware(
  thunk,
  // routerMiddleware,
  // logger,
  promiseMiddleware(),
)

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducers,
  enhancers,
  middlewares,
)

export default store