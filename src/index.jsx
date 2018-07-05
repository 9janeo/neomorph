import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Posts from './posts';
import Post from './post';
import Projects from './projects';
import Project from './project';
import NotFound from './not-found';
import LoadingIcon from './loading-icon.png';
import Placeholder from './placeholder.png';

// Load the Sass file
require('./style.scss');

const App = () => (
  <div id="page-inner">
    <Header />
    <div id="content">      
      <Switch>
        <Route exact path={NeomorphSettings.path} component={Posts} /> //the root path
        <Route exact path={NeomorphSettings.path + 'posts/:slug'} component={Post} />
        <Route exact path={NeomorphSettings.path + 'project'} component={Projects} />
        <Route exact path={NeomorphSettings.path + 'projects/:slug'} component={Project} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
    <Footer />
  </div>
);

// React Router

const routes = (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

render( // rendering to the DOM by replacing #page with the root React component
  (routes), document.getElementById('neomorph') // rendering the route
);