class Post extends React.Component {
  redirectToShow(id){
    return `/gag/${id}`;
  }

  render() {
    return (
      <div className="thumbnail">
        <div className="caption">
          <h3>
            <a
              href={this.redirectToShow(this.props.post.id)}
              className="post-title"
              title={this.props.post.title}>
              {this.props.post.title}
            </a>
          </h3>
        </div>
        <img src={this.props.post.image} alt={this.props.post.title} />
      </div>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.object
};
