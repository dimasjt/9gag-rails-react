import {
  GET_POSTS,
} from "../constants"

import client from "../client"

export const getPosts = (section) => dispatch => {
  dispatch({
    type: GET_POSTS,
    payload: new Promise((resolve, rejected) => {
      client.get(section)
        .then(({ data }) => {
          resolve(data)
        })
        .catch(error =>
          rejected(error)
        )
    })
  })
}