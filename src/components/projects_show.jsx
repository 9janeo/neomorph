import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../actions';
// import NotFound from '../not-found';
// import Project from './components/project';
// import { Link } from 'react-router-dom';
// import ProjectList from './project-list';

class ProjectsShow extends Component {

  componentDidMount() {
    // var that = this; 
    console.log ("hitting projects show component");   
    const { id } = this.props.match.params.id
    this.props.fetchProject(id);
    console.log("Projects Show State:" + this.props);
    console.log("ID: " + this.props.match.params.id);
    // var url = window.location.href.split('/');
    // var slug = url.pop() || url.pop();

    // const WP_API_PAGE = "http://demo.wp-api.org/wp-json/wp/v2/pages/:slug"
    // fetch(NeomorphSettings.URL.api + "/projects?&_embed")
    //   .then(function (response) {
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response.json();
    //   })
    //   .then(function (response) {
    //     that.setState({ project: res[0] })
    //   });
  }

  renderProject(project) {
    return (
      <div>
        <p>
          Something written in here to identify project Show component
        </p>
        {/* <Project /> */}
        {/* // <div className="card">
        //   <div className="card-body">
        //     <div className="col-sm-8">
        //       <h4 className="card-title">{this.state.project.slug}</h4>
        //       <p className="card-text"><strike>Singular project I want the featured image!</strike><u>${this.state.project.id}</u> - {this.state.project.date}</p>
        //       <p className="card-text"><small className="text-muted">{this.state.project} in stock</small></p>
        //       <p className="card-text">{jQuery(this.state.project.description).text()}</p>
        //     	<div className="col-sm-4"><img className="project-image" src={this.state.project.images ? this.state.project.images[0].src : null} alt={this.state.project.images ? this.state.project.images[0].alt : null } /></div>
        //     </div>
        //   </div>
        // </div> */}
      </div>
    );
  }

  renderEmpty() {
    return (
      <NotFound />
    );
  }

  render() {
    const {project} = this.props;

    if (!project) {
      return <div>Loading ... </div>
    }
    // projects[this.props.match.params.id];

    return (
      <div className="container post-entry show">
        <h3>
          {project.titile}
        </h3>
        <h6>
          Categories: {project.categories}
        </h6>
        <p>
          {project.content}
        </p>
      </div>
    );
  }
}

function mapStateToProps({ projects }, ownProps) {
  return { project: projects[ownProps.match.params.id] };
  // return { projects };
}

export default connect(mapStateToProps, {fetchProject})(ProjectsShow);