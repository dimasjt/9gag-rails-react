import React from "react"
import { connect } from "react-redux"

import Post from "../components/Post"

import { getPosts } from "../actions/post"
import { bindActionCreators } from "redux";

class Section extends React.Component {
  componentWillMount() {
    this.props.getPosts("/hot")
  }

  render() {
    const { posts } = this.props

    return (
      <div className="row justify-content-md-center">
        {posts.data.map(post => <Post key={post.id} post={post} />)}
      </div>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ getPosts: bindActionCreators(getPosts, dispatch) })
)(Section)