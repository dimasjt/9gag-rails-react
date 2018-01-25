import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createBrowserHistory } from "history"
import { routerMiddleware } from "react-router-redux"

import rootReducers from "../reducers"

const middlewares = applyMiddleware(
  thunk,
  routerMiddleware(createBrowserHistory()),
)

const store = createStore(
  rootReducers,
  middlewares,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store