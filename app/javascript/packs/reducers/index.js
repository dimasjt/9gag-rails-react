import { combineReducers } from "redux"
import { routerReducer as router } from "react-router-redux"

import user from "./user"
import posts from "./posts"

const rootReducers = combineReducers({
  user,
  posts,
  router,
})

export default rootReducers