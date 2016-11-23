class Post extends React.Component {
  render() {
    return (
      <div className="thumbnail">
        <div className="caption">
          <h3>{this.props.post.title}</h3>
        </div>
        <img src={this.props.post.image} alt={this.props.post.title} />
      </div>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.object
};
