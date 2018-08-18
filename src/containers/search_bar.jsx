import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchWebsite } from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };

		// bind the context of onInputChange
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		// console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();
		// http://localhost/portfolio/wp-json/wp/v2/posts?type[]=post&type[]=page&search=term
		this.props.searchWebsite(this.state.term);
		this.setState({term: ''});
	}

	render() {
		// made input a controlled form by making value the state term
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Search this website"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchWebsite}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);