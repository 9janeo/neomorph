import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownSelect from './dropdown_select';
import { Link } from 'react-router-dom';


// ADD AUTHORIZATION CLASUE BEFORE ACCESS TO THIS COMPONENT
// const projectTypes = [ 
//     { key: 'web', value: 'website', label: 'website' },
//     { key: 'design', value: 'design', label: 'design' },
//     { key: 'review', value: 'review', label: 'review' },
//     { key: 'social', value: 'social', label: 'social' }, 
//     { key: 'model', value: 'model', label: 'model' },
// ]
const projectTypes = [ 
    'website', 'design', 'review', 'social', 'model'
]

class ProjectsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    render() {
        return (
            <div className="form-group">
                <div className="right text-xs-right">
                    <Link className="btn-sm btn-primary" to={NeomorphSettings.path + 'projects'}>
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        View Projects
                    </Link>
                </div>
                <h1>ProjectsNew!</h1>
                <form>
                    <Field
                        label="Title:"
                        name="title"
                        component={this.renderField}
                    />
                    <Field                        
                        label="Type:"
                        name="type"
                        options="website, design"
                        component={DropdownSelect}
                        choices={projectTypes}
                        className="form-control"
                    />
                    <Field
                        label="Project Content"
                        name="content"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    // console.log(values) -> {title: 'xxxxasda', type: 'sadfasdf', content: 'sdfsadfadf'}
    const errors = {}

    // Validate inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.type) {
        errors.type = 'Please select a project type';
    }

    if (!values.content || values.content.length < 50 ) {
        errors.content = 'Please write a description about the content at least 50 characters long';
    }

    // If errors is empty, the form will be submitted
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'ProjectsNewForm' //provide a UNIQUE string for all different forms
}) (ProjectsNew);