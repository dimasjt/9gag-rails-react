class Post extends React.Component {
  redirectToShow(id){
    return `/gag/${id}`;
  }

  titlePost(){
    let titlePost = (
      <a
        href={this.redirectToShow(this.props.post.id)}
        className="post-title"
        title={this.props.post.title}>
        {this.props.post.title}
      </a>
    )

    if (this.props.detail) {
      titlePost = this.props.post.title;
    }

    return titlePost
  }

  render() {
    return (
      <div className="thumbnail">
        <div className="caption">
          <h3 className={this.props.detail ? '' : 'title-post'}>
            {this.titlePost()}
          </h3>
        </div>
        <img src={this.props.post.image} alt={this.props.post.title} />
      </div>
    );
  }
}

Post.defaultProps = {
  detail: false
};

Post.propTypes = {
  post: React.PropTypes.object.isRequired,
  detail: React.PropTypes.bool
};
