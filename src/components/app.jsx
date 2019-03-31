import React, {Component} from 'react';
// import { createstore } from 'redux';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import Posts from '../components/posts';
import PostsNew from '../components/posts_new';
import ProjectsIndex from './projects_index';
import ProjectsNew from './projects_new';
import ProjectsShow from './projects_show';
import Page from './page';
import SearchBar from '../containers/search_bar';
import SearchResult from '../containers/search_result';

import NotFound from '../not-found';
import LoadingIcon from '../loading-icon.png';
import Placeholder from '../placeholder.png';

// Built with help using the following resourcs
// Muhammad Muhsin - https://www.smashingmagazine.com/2018/03/react-wordpress-web-app/
// https://snipcart.com/blog/reactjs-wordpress-rest-api-example

// Load the Sass file
// require('./style.scss');

//Initialize app state here, with path and custome post types

class App extends Component {
  render() {
    //console.log('App state:' + this.state);
    // console.log(store.getState());
    // <SearchBar />
    // <SearchResult />
    return (
      <div id="page-inner">
        <Header />
        <div className="container">
          <Switch>            
            <Route path={NeomorphSettings.path + 'projects/new'} component={ProjectsNew} />
            <Route path={NeomorphSettings.path + 'project/:id'} component={ProjectsShow} />
            <Route exact path={NeomorphSettings.path + 'projects'} component={ProjectsIndex} />            
            {/* <Route exact path={NeomorphSettings.path + 'page/:slug'} component={PageShow} /> */}
            {/* <Route exact path={NeomorphSettings.path + ':page'} component={Page} /> */}            
            <Route path={NeomorphSettings.path + 'new-post'} component={PostsNew} />\
            {/* <Route path={NeomorphSettings.path + 'new-entry'} component={PostsNew} /> make a component for creating all post types */}
            <Route exact path={NeomorphSettings.path + 'posts'} component={Posts} />            
            <Route exact path={NeomorphSettings.path + '/'} component={Posts} /> {/* /the root path */}
            {/* <Route exact path={NeomorphSettings.path + 'posts?post_type=projects'} component={Projects} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { app: state };
}

export default connect(mapStateToProps)(App);