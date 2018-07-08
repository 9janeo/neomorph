import React from 'react';
import NotFound from './not-found';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    var that = this;
    var url = window.location.href.split('/');
    var slug = url.pop() || url.pop();

    fetch(NeomorphSettings.URL.api + "/posts?slug=" + slug)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function (res) {
        that.setState({ post: res[0] })
      });
  }

  renderPosts() {
    return (
      <div className="card">        
        <div className="card-body">
          <h3 className="card-title"><Link to={'posts/' + post.slug}>{post.title.rendered}</Link></h3>
          <h4 className="card-author">Post made by: <Link to={post._links.author[0].href}>{post.author_name}</Link></h4>
          <p className="card-text"><small className="text-muted">{this.state.post.author_name} &ndash; {this.state.post.published_date}</small></p>
          {
            this.state.post.featured_image_src ? <img className="featured-image" src={this.state.post.featured_image_src} alt="featured image" /> : null
          }
          <p className="card-text" dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }}  />
        </div>
      </div>
    )
  }

  renderEmpty() {
    return (
      <NotFound />
    )
  }

  render() {
    console.log(this.state.post)
    return (
      <div className="container post-entry">
        {this.state.post.title ?
          this.renderPosts() :
          this.renderEmpty()
        }
      </div>
    );
  }
}

export default Post;