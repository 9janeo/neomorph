import React, { Component} from 'react';
import { Field, reduxForm } from 'redux-form';
// Import bootstrap classes through node module
// redux form allows this component to talk directly to the redux store
class PostsNew extends Component {
    renderField(field) {
        const {meta: { touched, error } } = field; // Handy es6 destructuring to get meta from field object and nested properties
        const className= `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"                    
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    } //Generalize renderField component and pass arbitrary props

    onSubmit(values){
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        // handleSubmit property being passed to PostsNew component on behalf of redux Form


        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field // represents a unique input available to user
                    label="Title"
                    name="title" // connected to error validation property name
                    component={this.renderField} // this component accepts a function or component used to display the field
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary text-xs-right">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    // console.log(values);
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title of at least 3 characters for this post.";
    }

    if (!values.content) {
        errors.content = "You need some content.";
    }

    if (!values.categories) {
        errors.categories = "Please enter at least one category for this post.";
    }

    // If errors is empty, the form will submit
    // if errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm' // Unique screen identifies different forms and allows redux to merge form states seperately 
})(PostsNew);