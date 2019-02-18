import _ from 'lodash';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProject, fetchProjects } from '../actions';
// import ProjectList from '../containers/project-list';

class ProjectsIndex extends Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    renderProjects() {
        //get all projects and display properly
        return _.map(this.props.projects, project => {
            const projectImage = project._embedded['wp:featuredmedia'][0].source_url
            return (
                    <div className="card-outer grid-item" key={project.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title"><Link to={NeomorphSettings.path + `project?id=${project.id}`}>{project.title.rendered}</Link></h4>
                                <div className="img-outer canvasThumb">
                                    <Link to={NeomorphSettings.path + project.slug}>
                                        <img className="card-img-top" src={projectImage} alt="Featured Image" />
                                    </Link>
                                </div>
                                <p>{jQuery(project.excerpt.rendered).text()}</p>
                                <Link to={NeomorphSettings.path + 'projects/' + project.id}>Read more</Link>
                            </div>
                        </div>
                    </div>
            );
        });
    }

    render() {        
        console.log("Render projects below:");
        console.log(this.props.projects);
        return (
            <div>
                <div className="project-module">
                    <div className="text-xs-right">
                        <Link className="btn btn-primary" to={NeomorphSettings.path + 'projects/new'}>New Project</Link>
                    </div>
                    <h1 className="project-title">Recent Projects</h1>                    
                    <div className="posts-container grid-container">                    
                        {this.renderProjects()}
                        {/* <ProjectList projects={this.props.projects} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsIndex);