import _ from 'lodash';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import LoadingIcon from '../loading-icon.png';
import Placeholder from '../placeholder.png';
import PostList from '../containers/post-list';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        //get all projects and display properly

        return _.map(this.props.posts, post => {
            return (                    
                <div className="card-outer grid-item" key={post.id}>                    
                    <div className="card h-100">
                        <div className="img-outer">
                            <Link to={'post/?slug=' + post.slug}>
                                <img className="card-img-top" src={post.featured_image_src ? post.featured_image_src : Placeholder} alt="Featured Image" />
                            </Link>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><Link to={NeomorphSettings.path + `posts?id=${post.id}`}>{post.title.rendered}</Link></h4>
                            <h4 className="card-author">Post made by: <Link to={post._links.author[0].href}>{post.author_name}</Link></h4>
                            <p className="card-text"><small className="text-muted">{post.author_name} &ndash; {post.published_date}</small></p>
                            <p>{jQuery(post.excerpt.rendered).text()}</p>                        
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <div className="post-module">
                    <div className="float-right text-xs-right">
                        <Link className="btn btn-primary" to={'new-post'}>New Post</Link>
                    </div>
                    <h1 className="page-title">Recent Posts</h1>                    
                    <div className="posts-container grid-container">                    
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        );    
    }

}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);