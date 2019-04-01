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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'has-text-help' },
                field.meta.touched ? field.meta.error : ''
            )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0c19uZXcuanN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwicmVuZGVyRmllbGQiLCJmaWVsZCIsImxhYmVsIiwiaW5wdXQiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwicHJvcHMiLCJiaW5kIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJ0aXRsZSIsImxlbmd0aCIsImNvbnRlbnQiLCJjYXRlZ29yaWVzIiwicmVkdXhGb3JtIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFFBQU4sU0FBdUIsK0NBQXZCLENBQWlDO0FBQzdCQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFRQSxzQkFBTUM7QUFBZCxhQURKO0FBRUk7QUFDSSwyQkFBVSxjQURkO0FBRUksc0JBQUs7QUFGVCxlQUdRRCxNQUFNRSxLQUhkLEVBRko7QUFPSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxlQUFmO0FBQ0tGLHNCQUFNRyxJQUFOLENBQVdDLE9BQVgsR0FBcUJKLE1BQU1HLElBQU4sQ0FBV0UsS0FBaEMsR0FBd0M7QUFEN0M7QUFQSixTQURKO0FBYUgsS0FmNEIsQ0FlM0I7O0FBRUZDLGFBQVNDLE1BQVQsRUFBZ0I7QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNIOztBQUVERyxhQUFTO0FBQ0wsY0FBTSxFQUFFQyxZQUFGLEtBQW1CLEtBQUtDLEtBQTlCO0FBQ0E7OztBQUdBLGVBQ0k7QUFBQTtBQUFBLGNBQU0sVUFBVUQsYUFBYSxLQUFLTCxRQUFMLENBQWNPLElBQWQsQ0FBbUIsSUFBbkIsQ0FBYixDQUFoQjtBQUNJLHVFQUFDLGdEQUFELENBQU87QUFBUCxnQkFDSSxPQUFNLE9BRFY7QUFFSSxzQkFBSyxPQUZULENBRWlCO0FBRmpCLGtCQUdJLFdBQVcsS0FBS2QsV0FIcEIsQ0FHaUM7QUFIakMsY0FESjtBQU1JLHVFQUFDLGdEQUFEO0FBQ0ksdUJBQU0sWUFEVjtBQUVJLHNCQUFLLFlBRlQ7QUFHSSwyQkFBVyxLQUFLQTtBQUhwQixjQU5KO0FBV0ksdUVBQUMsZ0RBQUQ7QUFDSSx1QkFBTSxjQURWO0FBRUksc0JBQUssU0FGVDtBQUdJLDJCQUFXLEtBQUtBO0FBSHBCLGNBWEo7QUFnQkk7QUFBQTtBQUFBLGtCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLCtCQUFoQztBQUFBO0FBQUE7QUFoQkosU0FESjtBQW9CSDtBQTlDNEI7O0FBaURqQyxTQUFTZSxRQUFULENBQWtCUCxNQUFsQixFQUEwQjtBQUN0QjtBQUNBLFVBQU1RLFNBQVMsRUFBZjs7QUFFQTtBQUNBLFFBQUksQ0FBQ1IsT0FBT1MsS0FBUixJQUFpQlQsT0FBT1MsS0FBUCxDQUFhQyxNQUFiLEdBQXNCLENBQTNDLEVBQThDO0FBQzFDRixlQUFPQyxLQUFQLEdBQWUsdURBQWY7QUFDSDs7QUFFRCxRQUFJLENBQUNULE9BQU9XLE9BQVosRUFBcUI7QUFDakJILGVBQU9HLE9BQVAsR0FBaUIsd0JBQWpCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDWCxPQUFPWSxVQUFaLEVBQXdCO0FBQ3BCSixlQUFPSSxVQUFQLEdBQW9CLG1EQUFwQjtBQUNIOztBQUVEO0FBQ0E7QUFDQSxXQUFPSixNQUFQO0FBQ0g7O0FBRUQsK0RBQWUsNERBQUFLLENBQVU7QUFDckJOLFlBRHFCO0FBRXJCTyxVQUFNLGNBRmUsQ0FFQTtBQUZBLENBQVYsRUFHWnZCLFFBSFksQ0FBZixFIiwiZmlsZSI6ImFwcC41NDgwZTc4MTc4NmNkODEzMDhjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcbi8vIHJlZHV4IGZvcm0gYWxsb3dzIHRoaXMgY29tcG9uZW50IHRvIHRhbGsgZGlyZWN0bHkgdG8gdGhlIHJlZHV4IHN0b3JlXHJcbmNsYXNzIFBvc3RzTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlckZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGhhcy1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57ZmllbGQubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtaGVscFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWVsZC5tZXRhLnRvdWNoZWQgPyBmaWVsZC5tZXRhLmVycm9yIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0gLy9HZW5lcmFsaXplIHJlbmRlckZpZWxkIGNvbXBvbmVudCBhbmQgcGFzcyBhcmJpdHJhcnkgcHJvcHNcclxuXHJcbiAgICBvblN1Ym1pdCh2YWx1ZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIC8vIGhhbmRsZVN1Ym1pdCBwcm9wZXJ0eSBiZWluZyBwYXNzZWQgdG8gUG9zdHNOZXcgY29tcG9uZW50IG9uIGJlaGFsZiBvZiByZWR1eCBGb3JtXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHRoaXMub25TdWJtaXQuYmluZCh0aGlzKSl9PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIC8vIHJlcHJlc2VudHMgYSB1bmlxdWUgaW5wdXQgYXZhaWxhYmxlIHRvIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIiAvLyBjb25uZWN0ZWQgdG8gZXJyb3IgdmFsaWRhdGlvbiBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZpZWxkfSAvLyB0aGlzIGNvbXBvbmVudCBhY2NlcHRzIGEgZnVuY3Rpb24gb3IgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSB0aGUgZmllbGRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3N0IENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHRleHQteHMtcmlnaHRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlcykge1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRoZSBpbnB1dHMgZnJvbSAndmFsdWVzJ1xyXG4gICAgaWYgKCF2YWx1ZXMudGl0bGUgfHwgdmFsdWVzLnRpdGxlLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICBlcnJvcnMudGl0bGUgPSBcIkVudGVyIGEgdGl0bGUgb2YgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGZvciB0aGlzIHBvc3QuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2YWx1ZXMuY29udGVudCkge1xyXG4gICAgICAgIGVycm9ycy5jb250ZW50ID0gXCJZb3UgbmVlZCBzb21lIGNvbnRlbnQuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2YWx1ZXMuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGVycm9ycy5jYXRlZ29yaWVzID0gXCJQbGVhc2UgZW50ZXIgYXQgbGVhc3Qgb25lIGNhdGVnb3J5IGZvciB0aGlzIHBvc3QuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgZXJyb3JzIGlzIGVtcHR5LCB0aGUgZm9ybSB3aWxsIHN1Ym1pdFxyXG4gICAgLy8gaWYgZXJyb3JzIGhhcyBhbnkgcHJvcGVydGllcywgcmVkdXggZm9ybSBhc3N1bWVzIGZvcm0gaXMgaW52YWxpZFxyXG4gICAgcmV0dXJuIGVycm9ycztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcclxuICAgIHZhbGlkYXRlLFxyXG4gICAgZm9ybTogJ1Bvc3RzTmV3Rm9ybScgLy8gVW5pcXVlIHNjcmVlbiBpZGVudGlmaWVzIGRpZmZlcmVudCBmb3JtcyBhbmQgYWxsb3dzIHJlZHV4IHRvIG1lcmdlIGZvcm0gc3RhdGVzIHNlcGVyYXRlbHkgXHJcbn0pKFBvc3RzTmV3KTsiXSwic291cmNlUm9vdCI6IiJ9