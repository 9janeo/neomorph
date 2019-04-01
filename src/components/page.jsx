import _ from 'lodash';
import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPage } from '../actions';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import LoadingIcon from '../loading-icon.png';
import Placeholder from '../placeholder.png';
import PostList from '../containers/post-list';

class Page extends Component {
	constructor(props){
		super(props);
		this.state = {
			page: '',
			url: `${this.props.match.params}`
			//get page render and place in content variable
		};
		// this.getPage = this.getPage.bind(this);
  }
  
  componentDidMount() {
    // this.setState({ pageName: `${this.props.match.params.page}`});
    // const pageName = (this.props.match.params.page === 'about') ? 'home' : this.props.match.params.page ;
    const pageName = this.props.match.params.page ;
    this.setState({page: `${pageName}`})
    // this.props.fetchPage(pageName);    
  }

  renderPage(postData) {
    // using lodash map because pages is and object not array    
    console.log(this.props.page);
    return _.map(this.props.page, page => {      
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
  
  // renderPage() {
  //   // using lodash map because pages is and object not array    
  //   console.log(this.props);
  //   return _.map(this.props.page, page => {      
  //     const id = page.id
  //     const slug = page.slug
	// 		const title = page.title.rendered
	// 		const content = page.content.rendered
	// 		const author = page.author_name
	// 		const excerpt = page ? page.excerpt.rendered : ''
  //     return(
  //       <div key={id}>
  //         <h3 className="page-title">
  //           {title}
  //         </h3>
  //         <div dangerouslySetInnerHTML={{__html: content}}>            
  //         </div>
  //       </div>
  //     );
  //   });
  // }

	render() {
    // console.log(this.props.pages);    
		return (
			<div className="post wrapper whitebg">
        <h1>Page</h1>
        { this.renderPage({fetchPage}) }
			</div>
		);
  }
    
}

function mapStateToProps({fetchPage}) {
  return { fetchPage };
}

// function mapStateToProps({fetchPage}) {
// 	return bindActionCreators({fetchPage}, dispatch);
// }

export default connect(mapStateToProps, { fetchPage })(Page);