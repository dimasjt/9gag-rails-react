import React from "react"

class Post extends React.PureComponent {
  render() {
    const { post } = this.props

    return (
      <div className="card" style={{ marginTop: 10, marginBottom: 10, width: "60%" }}>
        <div className="card-body" style={{ paddingBottom: 0 }}>
          <h5 className="card-title" dangerouslySetInnerHTML={{ __html: post.title }}></h5>
        </div>
        {
          post.video ? (
            <video controls poster={post.media.poster} loop={true}>
              <source src={post.media.mp4} type="video/mp4"></source>
              <source src={post.media.webvm} type="video/webvm"></source>
            </video>
          ) : (
              <img className="card-img-top" src={post.media.image} alt={post.title} />
            )
        }
      </div>
    )
  }
}

export default Post