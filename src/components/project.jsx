import React from 'react';
import NotFound from '../not-found';
// import Project from './components/project';
import { Link } from 'react-router-dom';
// import ProjectList from './project-list';

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      project: []
    }
  }

  componentDidMount() {
    // var that = this;
    console.log("State:" + {props});
    // var url = window.location.href.split('/');
    // var slug = url.pop() || url.pop();

    // const WP_API_PAGE = "http://demo.wp-api.org/wp-json/wp/v2/pages/:slug"
    fetch(NeomorphSettings.URL.api + "/projects?&_embed")
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function (response) {
        that.setState({ project: res[0] })
      });
  }

  renderProject() {
    return (
      <div>
        <p>
          Something written in here to identify project component
        </p>
        <Project />
        // <div className="card">
        //   <div className="card-body">
        //     <div className="col-sm-8">
        //       <h4 className="card-title">{this.state.project.slug}</h4>
        //       <p className="card-text"><strike>Singular project I want the featured image!</strike><u>${this.state.project.id}</u> - {this.state.project.date}</p>
        //       <p className="card-text"><small className="text-muted">{this.state.project} in stock</small></p>
        //       <p className="card-text">{jQuery(this.state.project.description).text()}</p>
        //     	<div className="col-sm-4"><img className="project-image" src={this.state.project.images ? this.state.project.images[0].src : null} alt={this.state.project.images ? this.state.project.images[0].alt : null } /></div>
        //     </div>
        //   </div>
        // </div>
      </div>
    );
  }

  renderEmpty() {
    return (
      <NotFound />
    );
  }

  render() {
    return (
      <div className="container post-entry">
        {this.renderProject(this.state.project)}
        {/* {this.state.project ?
          this.renderProject(this.state.project) :
          this.renderEmpty() */}
        }
      </div>
    );
  }
}

export default Project;