import _ from 'lodash';
import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPage } from '../actions';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import LoadingIcon from '../loading-icon.png';
import Placeholder from '../placeholder.png';
import PostList from '../containers/post-list';

class Page extends Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		pageName: '',
	// 		url: ''
	// 		//get page render and place in content variable
	// 	};
	// 	// this.getPage = this.getPage.bind(this);
  // }
  
  componentDidMount() {
    // this.setState({ pageName: `${this.props.match.params.page}`});
    const pageName = (this.props.match.params.page === 'about') ? 'home' : this.props.match.params.page ;
    this.props.fetchPage(pageName);    
  }

  renderPage() {
    // using lodash map because pages is and object not array
    return _.map(this.props.pages, page => {
      const id = page.id
      const slug = page.slug
			const title = page.title.rendered
			const content = page.content.rendered
			const author = page.author_name
			const excerpt = page ? page.excerpt.rendered : ''
      return(
        <div key={id}>
          <h3 className="page-title">
            {title}
          </h3>
          <div dangerouslySetInnerHTML={{__html: content}}>            
          </div>
        </div>
      );
    });
  }

	render() {
    // console.log(this.props.pages);
    console.log(this.state);  
		return (
			<div className="post wrapper whitebg">
        <h1>Page</h1>
				{this.renderPage()}
			</div>
		);
  }
  
  // fetchPage(pageName){
    
  // }

	// getPage() {
	// 	var that = this;
  //   var totalPages;

  //   // adding a loader
  //   jQuery("#loader").addClass("active");

  //   // this.setState({ page: this.state.page + 1 });
  //   fetch(NeomorphSettings.URL.api + "/pages")
  //     .then(function (response) {
  //     	console.log(response);
  //       for (var pair of response.headers.entries()) {

  //         // getting the total number of pages
  //         if (pair[0] == 'x-wp-totalpages') {
  //           totalPages = pair[1];
  //         }

  //         if (that.state.page >= totalPages) {
  //           that.setState({ getProjects: false })
  //         }
  //       }
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
        
  //       return response.json();
  //     })
  //     .then(function (results) {
  //       var allProjects = that.state.projects.slice();
  //       results.forEach(function (single) {
  //         allProjects.push(single);
  //       })
  //       that.setState({ projects: allProjects });

  //       // removing the loader
  //       jQuery("#loader").removeClass("active");

  //     }).catch(function (error) {
  //       console.log('There has been a problem with your fetch operation: ' + error.message);
  //       jQuery("#loader").remove();
  //     });
  // }
  
}

function mapStateToProps(state) {
  return { page: state.page };
}

// function mapStateToProps({fetchPage}) {
// 	return bindActionCreators({fetchPage}, dispatch);
// }

export default connect(mapStateToProps, { fetchPage })(Page);