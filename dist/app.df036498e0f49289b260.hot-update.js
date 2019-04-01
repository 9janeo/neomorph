webpackHotUpdate("app",{

/***/ "./src/components/posts_new.jsx":
/*!**************************************!*\
  !*** ./src/components/posts_new.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



// redux form allows this component to talk directly to the redux store
class PostsNew extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    renderField(field) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'form-group has-danger' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'label',
                null,
                field.label
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({
                className: 'form-control',
                type: 'text'
            }, field.input)),
            field.meta.touched ? field.meta.error : ''
        );
    } //Generalize renderField component and pass arbitrary props

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        // handleSubmit property being passed to PostsNew component on behalf of redux Form


        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'form',
            { onSubmit: handleSubmit(this.onSubmit.bind(this)) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"] // represents a unique input available to user
            , { label: 'Title',
                name: 'title' // connected to error validation property name
                , component: this.renderField // this component accepts a function or component used to display the field
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                label: 'Categories',
                name: 'categories',
                component: this.renderField
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                label: 'Post Content',
                name: 'content',
                component: this.renderField
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                { type: 'submit', className: 'btn btn-primary text-xs-right' },
                'Submit'
            )
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

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
    validate,
    form: 'PostsNewForm' // Unique screen identifies different forms and allows redux to merge form states seperately 
})(PostsNew));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0c19uZXcuanN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwicmVuZGVyRmllbGQiLCJmaWVsZCIsImxhYmVsIiwiaW5wdXQiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwicHJvcHMiLCJiaW5kIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJ0aXRsZSIsImxlbmd0aCIsImNvbnRlbnQiLCJjYXRlZ29yaWVzIiwicmVkdXhGb3JtIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFFBQU4sU0FBdUIsK0NBQXZCLENBQWlDO0FBQzdCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFRQSxzQkFBTUM7QUFBZCxhQURKO0FBRUk7QUFDSSwyQkFBVSxjQURkO0FBRUksc0JBQUs7QUFGVCxlQUdRRCxNQUFNRSxLQUhkLEVBRko7QUFPS0Ysa0JBQU1HLElBQU4sQ0FBV0MsT0FBWCxHQUFxQkosTUFBTUcsSUFBTixDQUFXRSxLQUFoQyxHQUF3QztBQVA3QyxTQURKO0FBV0gsS0FiNEIsQ0FhM0I7O0FBRUZDLGFBQVNDLE1BQVQsRUFBZ0I7QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNIOztBQUVERyxhQUFTO0FBQ0wsY0FBTSxFQUFFQyxZQUFGLEtBQW1CLEtBQUtDLEtBQTlCO0FBQ0E7OztBQUdBLGVBQ0k7QUFBQTtBQUFBLGNBQU0sVUFBVUQsYUFBYSxLQUFLTCxRQUFMLENBQWNPLElBQWQsQ0FBbUIsSUFBbkIsQ0FBYixDQUFoQjtBQUNJLHVFQUFDLGdEQUFELENBQU87QUFBUCxnQkFDSSxPQUFNLE9BRFY7QUFFSSxzQkFBSyxPQUZULENBRWlCO0FBRmpCLGtCQUdJLFdBQVcsS0FBS2QsV0FIcEIsQ0FHaUM7QUFIakMsY0FESjtBQU1JLHVFQUFDLGdEQUFEO0FBQ0ksdUJBQU0sWUFEVjtBQUVJLHNCQUFLLFlBRlQ7QUFHSSwyQkFBVyxLQUFLQTtBQUhwQixjQU5KO0FBV0ksdUVBQUMsZ0RBQUQ7QUFDSSx1QkFBTSxjQURWO0FBRUksc0JBQUssU0FGVDtBQUdJLDJCQUFXLEtBQUtBO0FBSHBCLGNBWEo7QUFnQkk7QUFBQTtBQUFBLGtCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLCtCQUFoQztBQUFBO0FBQUE7QUFoQkosU0FESjtBQW9CSDtBQTVDNEI7O0FBK0NqQyxTQUFTZSxRQUFULENBQWtCUCxNQUFsQixFQUEwQjtBQUN0QjtBQUNBLFVBQU1RLFNBQVMsRUFBZjs7QUFFQTtBQUNBLFFBQUksQ0FBQ1IsT0FBT1MsS0FBUixJQUFpQlQsT0FBT1MsS0FBUCxDQUFhQyxNQUFiLEdBQXNCLENBQTNDLEVBQThDO0FBQzFDRixlQUFPQyxLQUFQLEdBQWUsdURBQWY7QUFDSDs7QUFFRCxRQUFJLENBQUNULE9BQU9XLE9BQVosRUFBcUI7QUFDakJILGVBQU9HLE9BQVAsR0FBaUIsd0JBQWpCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDWCxPQUFPWSxVQUFaLEVBQXdCO0FBQ3BCSixlQUFPSSxVQUFQLEdBQW9CLG1EQUFwQjtBQUNIOztBQUVEO0FBQ0E7QUFDQSxXQUFPSixNQUFQO0FBQ0g7O0FBRUQsK0RBQWUsNERBQUFLLENBQVU7QUFDckJOLFlBRHFCO0FBRXJCTyxVQUFNLGNBRmUsQ0FFQTtBQUZBLENBQVYsRUFHWnZCLFFBSFksQ0FBZixFIiwiZmlsZSI6ImFwcC5kZjAzNjQ5OGUwZjQ5Mjg5YjI2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcbi8vIHJlZHV4IGZvcm0gYWxsb3dzIHRoaXMgY29tcG9uZW50IHRvIHRhbGsgZGlyZWN0bHkgdG8gdGhlIHJlZHV4IHN0b3JlXHJcbmNsYXNzIFBvc3RzTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlckZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGhhcy1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57ZmllbGQubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtmaWVsZC5tZXRhLnRvdWNoZWQgPyBmaWVsZC5tZXRhLmVycm9yIDogJyd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9IC8vR2VuZXJhbGl6ZSByZW5kZXJGaWVsZCBjb21wb25lbnQgYW5kIHBhc3MgYXJiaXRyYXJ5IHByb3BzXHJcblxyXG4gICAgb25TdWJtaXQodmFsdWVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvLyBoYW5kbGVTdWJtaXQgcHJvcGVydHkgYmVpbmcgcGFzc2VkIHRvIFBvc3RzTmV3IGNvbXBvbmVudCBvbiBiZWhhbGYgb2YgcmVkdXggRm9ybVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLm9uU3VibWl0LmJpbmQodGhpcykpfT5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCAvLyByZXByZXNlbnRzIGEgdW5pcXVlIGlucHV0IGF2YWlsYWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCIgLy8gY29ubmVjdGVkIHRvIGVycm9yIHZhbGlkYXRpb24gcHJvcGVydHkgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGaWVsZH0gLy8gdGhpcyBjb21wb25lbnQgYWNjZXB0cyBhIGZ1bmN0aW9uIG9yIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgdGhlIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZpZWxkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9zdCBDb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZpZWxkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB0ZXh0LXhzLXJpZ2h0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZXMpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGUgaW5wdXRzIGZyb20gJ3ZhbHVlcydcclxuICAgIGlmICghdmFsdWVzLnRpdGxlIHx8IHZhbHVlcy50aXRsZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgZXJyb3JzLnRpdGxlID0gXCJFbnRlciBhIHRpdGxlIG9mIGF0IGxlYXN0IDMgY2hhcmFjdGVycyBmb3IgdGhpcyBwb3N0LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsdWVzLmNvbnRlbnQpIHtcclxuICAgICAgICBlcnJvcnMuY29udGVudCA9IFwiWW91IG5lZWQgc29tZSBjb250ZW50LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsdWVzLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBlcnJvcnMuY2F0ZWdvcmllcyA9IFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IG9uZSBjYXRlZ29yeSBmb3IgdGhpcyBwb3N0LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGVycm9ycyBpcyBlbXB0eSwgdGhlIGZvcm0gd2lsbCBzdWJtaXRcclxuICAgIC8vIGlmIGVycm9ycyBoYXMgYW55IHByb3BlcnRpZXMsIHJlZHV4IGZvcm0gYXNzdW1lcyBmb3JtIGlzIGludmFsaWRcclxuICAgIHJldHVybiBlcnJvcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XHJcbiAgICB2YWxpZGF0ZSxcclxuICAgIGZvcm06ICdQb3N0c05ld0Zvcm0nIC8vIFVuaXF1ZSBzY3JlZW4gaWRlbnRpZmllcyBkaWZmZXJlbnQgZm9ybXMgYW5kIGFsbG93cyByZWR1eCB0byBtZXJnZSBmb3JtIHN0YXRlcyBzZXBlcmF0ZWx5IFxyXG59KShQb3N0c05ldyk7Il0sInNvdXJjZVJvb3QiOiIifQ==