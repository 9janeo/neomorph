import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading-icon.png';
import Placeholder from './placeholder.png';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      page: 0,
      getProjects: true,
      controller: false
    }
    this.getMoreProjects = this.getMoreProjects.bind(this);
  }

  componentWillUnmount() {
    this.getMoreProjects = null;
  }

  componentDidMount() {
    var that = this;

    // init ScrollMagic Controller
    that.state.controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: "#colophon", triggerHook: "onEnter" })
      .addTo(that.state.controller)
      .on("enter", function (e) {
        if (that.state.getProjects && that.getMoreProjects !== null) {
          that.getMoreProjects();
        }
      });
  }

  getMoreProjects() {
    var that = this;
    var totalPages;

    // adding a loader
    jQuery("#loader").addClass("active");

    this.setState({ page: this.state.page + 1 });

    fetch(NeomorphSettings.URL.api + "/projects/?page=" + this.state.page)
      .then(function (response) {
        for (var pair of response.headers.entries()) {

            // getting the total number of pages
            if (pair[0] == 'x-wp-totalpages') {
                totalPages = pair[1];
            }

            if (that.state.page >= totalPages) {
                that.setState({ getProjects: false })
            }
        }
        if (!response.ok) {
            throw Error(response.statusText);
        }
        
        return response.json();
      })
      .then(function (results) {
        var allProjects = that.state.projects.slice();
        results.forEach(function (single) {
            allProjects.push(single);
        })
        that.setState({ projects: allProjects });

        // removing the loader
        jQuery("#loader").removeClass("active");

      }).catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        jQuery("#loader").remove();
      });

  }

  componentDidUpdate() {
    var fadeInController = new ScrollMagic.Controller();
    jQuery('.container .col-md-4.card-outer').each(function () {
      var ourScene2 = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        reverse: false,
        triggerHook: 1
      })
        .setClassToggle(this, 'fade-in')
        .addTo(fadeInController);
    });
  }

  renderProjects() {
    return this.state.projects.map((project, i) => {
      return (
        <div className="col-md-4 card-outer" key={i}>
          <div className="card">
            <div className="img-outer">
              <Link to={project.slug}>
                <img className="card-img-top" src={project.images ? project.images[0].src : Placeholder} alt="Featured Image" />
              </Link>
            </div>
            <div className="card-body">
              <h4 className="card-title"><Link to={project.slug}>{project.name}</Link></h4>
              <p className="card-text"><small className="text-muted">$ {project.price}</small></p>
              <p>{jQuery(project.description).text()}</p>
            </div>
          </div>
        </div>
      )
    });
  }

  renderEmpty() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">404 Page Not Found!</h4>
          <p className="card-text">The page you requested does not exist.</p>
          <p className="card-text"><Link to={NeomorphSettings.path}>Return to homepage</Link></p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container post-entry">
        {this.state.projects ?
          this.renderProjects() :
          this.renderEmpty()
        }
        <img src={LoadingIcon} alt="loader gif" id="loader" />
      </div>
    );
  }
}

export default Projects;