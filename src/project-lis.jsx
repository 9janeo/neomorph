// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from './placeholder.png';
import NotFound from './not-found';
import Project from './project'

class ProjectList extends React.Component {

  renderProjects() {
    const name = "Niyi Adewole";
    return this.props.projects.map((project, i) => {
      // const projectImg = project._links.wp-featuredmedia[0].href;
      console.log( {project} );
      var projectImage = project._embedded['wp:featuredmedia'][0].source_url
      // console.log({project._embedded['wp-featuredmedia'][0].link});
      // <Project />
      return (
        <div className="card-outer grid-item" key={i}>          
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title"><Link to={'/project/' + project.slug}>{project.title.rendered}</Link></h4>
              <div className="img-outer canvasThumb">
                <Link to={NeomorphSettings.path + project.slug}>
                  <img className="card-img-top" src={projectImage} alt="Featured Image" />
                </Link>
              </div>
              <p>{jQuery(project.excerpt.rendered).text()}</p>
              <Link to={NeomorphSettings.path + 'project/' + project.id}>Read more</Link>
            </div>
          </div>
        </div>
      )
    });
  }

  renderEmpty() {
    return (
      <NotFound />
    )
  }

  render() {
    if (!this.props.projects) {
      return null;
    }

    return (
      <div className="posts-container grid-container">
        {this.props.projects.length ?
          this.renderProjects() :
          this.renderEmpty()
        }
      </div>
    );
  }
}

export default ProjectList;