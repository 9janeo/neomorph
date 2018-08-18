import React, { Component } from 'react';
import Placeholder from '../placeholder.png';
import {connect} from 'react-redux';

class SearchResult extends Component {

	renderResult(postData) {
			const id = postData.id
			const title = postData.title.rendered
			const type = postData.type
			const author = postData.author_name
			const excerpt = postData ? postData.excerpt.rendered : ''
		return (
			<div className="card-outer grid-item" key={postData.id}>
				<div className="card h-100">
	        <div className="img-outer">            
	          <img className="card-img-top" src={Placeholder} alt="Featured Image" />            
	        </div>
	        <div className="card-body">
	          <h3 className="card-title">{postData.title.rendered}</h3>
	          <small className="card-author">{type} by: {author}</small>
	          <span dangerouslySetInnerHTML={{__html: excerpt}}></span>
	        </div>
	      </div>
      </div>
		);
	}


	render() {
			// console.log(this.props.search);
		return (
			<div className="search-module">
				<span className="row">
					<h2 className="float-left">Search Results</h2>
					<button className="btn btn-danger float-right">Clear</button>
				</span>
				<div className="posts-container grid-container">
					{this.props.search.map(this.renderResult)}      
	      </div>
	    </div>
		);
	}
}

function mapStateToProps({search}) {
	return { search };
}

export default connect(mapStateToProps)(SearchResult);