import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

// import Header from './header';
// import Footer from './footer';
// import Posts from './components/posts';
// import Post from './containers/post';
// import Projects from './projects';
// import Project from './project';
// import Page from './components/page';

// import NotFound from './not-found';

import App from './components/app';
// import ProjectsIndex from './components/projects_index';
// import ProjectsNew from './components/projects_new';

 const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// React Router
const routes = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div id="page-inner">
        {/* <Header /> */}
        {/* <div className="container"> */}
          {/* <Route path={NeomorphSettings.path + 'project/:id'} component={Project} /> */}
          <Route path='/' component={App} />
          {/* <Route exact path={NeomorphSettings.path + '/projects/new'} component={ProjectsNew} /> */}
          {/* <Route path={"/projects"} component={ProjectsIndex} /> */}
          
          {/* <Route exact path={NeomorphSettings.path + 'projects'} component={ProjectsIndex} />
          <Route exact path={NeomorphSettings.path + ':page'} component={Page} />
          <Route exact path={NeomorphSettings.path} component={Posts} /> //the root path             */}
          {/* <Route exact path={NeomorphSettings.path + 'posts?post_type=projects'} component={Projects} /> */}
          {/* <Route path="*" component={NotFound} /> */}
        {/* </div> */}
      </div>
    </Router>
  </Provider> 
);

// const printa = (
//   // console.log('Accepting the updated printMe Module!')
// );

render( // rendering to the DOM by replacing #page with the root React component  
  (routes) , document.getElementById('neomorph') // rendering the route
);


if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe modu!!');
     printMe();
    })
}