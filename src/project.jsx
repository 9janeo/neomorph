import React from 'react';
import NotFound from './not-found';
import { Link } from 'react-router-dom';

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    var that = this;
    var url = window.location.href.split('/');
    var slug = url.pop() || url.pop();

    fetch(NeomorphSettings.URL.api + "/projects/" + slug)
      .then(function (response) {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response.json();
      })
      .then(function (res) {
          that.setState({ project: res[0] })
      });
  }

  renderProject() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="col-sm-4"><img className="project-image" src={this.state.project.images ? this.state.project.images[0].src : null} alt={this.state.project.images ? this.state.project.images[0].alt : null } /></div>
          <div className="col-sm-8">
            <h4 className="card-title">{this.state.project.name}</h4>
            <p className="card-text"><strike>${this.state.project.regular_price}</strike> <u>${this.state.project.sale_price}</u></p>
            <p className="card-text"><small className="text-muted">{this.state.project.stock_quantity} in stock</small></p>
            <p className="card-text">{jQuery(this.state.project.description).text()}</p>
          </div>
        </div>
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
        {this.state.project ?
          this.renderProject() :
          this.renderEmpty()
        }
      </div>
    );
  }
}

export default Project;