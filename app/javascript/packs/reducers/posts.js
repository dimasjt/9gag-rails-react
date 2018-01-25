const initialState = {
  loading: false,
  data: [],
  nextPage: null,
  message: null,
}

function posts(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS_FULFILLED":
      return {
        ...state,
        data: state.data.concat(action.payload.posts),
        nextPage: action.payload.nextPage,
        loading: false,
      }
    case "GET_POSTS_REJECTED":
      return {
        ...state,
        loading: false,
        message: action.payload,
      }
    case "GET_POSTS_PENDING":
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default posts