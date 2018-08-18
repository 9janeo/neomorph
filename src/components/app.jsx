import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import Posts from '../components/posts';
import Post from '../containers/post';
import Projects from '../projects';
import Project from '../project';
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

export default class App extends Component {
  render() {
    // console.log(this.state);
    // <SearchBar />
    // <SearchResult />
    return (
      <div id="page-inner">
        <Header />
        <div className="container">
          <Switch>            
            <Route path={NeomorphSettings.path + 'project/:id'} component={Project} />
            <Route exact path={NeomorphSettings.path + 'projects'} component={Projects} />
            <Route exact path={NeomorphSettings.path + ':page'} component={Page} />
            <Route exact path={NeomorphSettings.path} component={Page} /> //the root path            
            {/* <Route exact path={NeomorphSettings.path + 'posts?post_type=projects'} component={Projects} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

