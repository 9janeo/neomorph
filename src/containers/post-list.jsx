// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../placeholder.png';
import NotFound from '../not-found';

class PostList extends React.Component {

  renderPosts() {
    const name = "Niyi Adewole";
    return this.props.posts.map((post, i) => {
      return (
        <div className="card-outer grid-item" key={i}>          
          <div className="card h-100">
            <div className="img-outer">
              <Link to={'post/?slug=' + post.slug}>
                <img className="card-img-top" src={post.featured_image_src ? post.featured_image_src : Placeholder} alt="Featured Image" />
              </Link>
            </div>
            <div className="card-body">
              <h3 className="card-title"><Link to={'post?slug=' + post.slug}>{post.title.rendered}</Link></h3>
              <h4 className="card-author">Post made by: <Link to={post._links.author[0].href}>{post.author_name}</Link></h4>
              <p className="card-text"><small className="text-muted">{post.author_name} &ndash; {post.published_date}</small></p>
              <p>{jQuery(post.excerpt.rendered).text()}</p>
            </div>
          </div>
        </div>
      )
    });
  }

  renderEmpty() {
    return (
      <NotFound />
    )
  }

  render() {
    if (!this.props.posts) {
      return null;
    }

    return (
      <div className="posts-container grid-container">
        {this.props.posts.length ?
          this.renderPosts() :
          this.renderEmpty()
        }
      </div>
    );
  }
}

export default PostList;