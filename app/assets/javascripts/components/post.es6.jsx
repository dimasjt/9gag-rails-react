class PostComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post) => {
          return (
            <div className="thumbnail">
              <img src={post.image} alt={post.title} />
              <div className="caption">
                <h3>{post.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

PostComponent.propTypes = {
  posts: React.PropTypes.array
};
