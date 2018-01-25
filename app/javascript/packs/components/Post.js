import React from "react"

class Post extends React.PureComponent {
  render() {
    const { post } = this.props

    return (
      <div className="card" style={{ marginTop: 10, marginBottom: 10 }}>
        <img className="card-img-top" src={post.media.image} alt={post.title} />
        <div className="card-body">
          <h5 className="card-title" dangerouslySetInnerHTML={{ __html: post.title }}></h5>
        </div>
      </div>
    )
  }
}

export default Post