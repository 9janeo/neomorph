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



// Import bootstrap classes through node module
// redux form allows this component to talk directly to the redux store
class PostsNew extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

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
                { className: 'text-help' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0c19uZXcuanN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwicmVuZGVyRmllbGQiLCJmaWVsZCIsImNsYXNzTmFtZSIsIm1ldGEiLCJ0b3VjaGVkIiwiZXJyb3IiLCJsYWJlbCIsImlucHV0Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwicHJvcHMiLCJiaW5kIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJ0aXRsZSIsImxlbmd0aCIsImNvbnRlbnQiLCJjYXRlZ29yaWVzIiwicmVkdXhGb3JtIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsUUFBTixTQUF1QiwrQ0FBdkIsQ0FBaUM7QUFDN0JDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUMsWUFBWSxjQUFhRCxNQUFNRSxJQUFOLENBQVdDLE9BQVgsSUFBc0JILE1BQU1FLElBQU4sQ0FBV0UsS0FBakMsR0FBeUMsWUFBekMsR0FBd0QsRUFBRyxFQUExRjs7QUFFQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsdUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFBUUosc0JBQU1LO0FBQWQsYUFESjtBQUVJO0FBQ0ksMkJBQVUsY0FEZDtBQUVJLHNCQUFLO0FBRlQsZUFHUUwsTUFBTU0sS0FIZCxFQUZKO0FBT0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsV0FBZjtBQUNLTixzQkFBTUUsSUFBTixDQUFXQyxPQUFYLEdBQXFCSCxNQUFNRSxJQUFOLENBQVdFLEtBQWhDLEdBQXdDO0FBRDdDO0FBUEosU0FESjtBQWFILEtBakI0QixDQWlCM0I7O0FBRUZHLGFBQVNDLE1BQVQsRUFBZ0I7QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNIOztBQUVERyxhQUFTO0FBQ0wsY0FBTSxFQUFFQyxZQUFGLEtBQW1CLEtBQUtDLEtBQTlCO0FBQ0E7OztBQUdBLGVBQ0k7QUFBQTtBQUFBLGNBQU0sVUFBVUQsYUFBYSxLQUFLTCxRQUFMLENBQWNPLElBQWQsQ0FBbUIsSUFBbkIsQ0FBYixDQUFoQjtBQUNJLHVFQUFDLGdEQUFELENBQU87QUFBUCxnQkFDSSxPQUFNLE9BRFY7QUFFSSxzQkFBSyxPQUZULENBRWlCO0FBRmpCLGtCQUdJLFdBQVcsS0FBS2YsV0FIcEIsQ0FHaUM7QUFIakMsY0FESjtBQU1JLHVFQUFDLGdEQUFEO0FBQ0ksdUJBQU0sWUFEVjtBQUVJLHNCQUFLLFlBRlQ7QUFHSSwyQkFBVyxLQUFLQTtBQUhwQixjQU5KO0FBV0ksdUVBQUMsZ0RBQUQ7QUFDSSx1QkFBTSxjQURWO0FBRUksc0JBQUssU0FGVDtBQUdJLDJCQUFXLEtBQUtBO0FBSHBCLGNBWEo7QUFnQkk7QUFBQTtBQUFBLGtCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLCtCQUFoQztBQUFBO0FBQUE7QUFoQkosU0FESjtBQW9CSDtBQWhENEI7O0FBbURqQyxTQUFTZ0IsUUFBVCxDQUFrQlAsTUFBbEIsRUFBMEI7QUFDdEI7QUFDQSxVQUFNUSxTQUFTLEVBQWY7O0FBRUE7QUFDQSxRQUFJLENBQUNSLE9BQU9TLEtBQVIsSUFBaUJULE9BQU9TLEtBQVAsQ0FBYUMsTUFBYixHQUFzQixDQUEzQyxFQUE4QztBQUMxQ0YsZUFBT0MsS0FBUCxHQUFlLHVEQUFmO0FBQ0g7O0FBRUQsUUFBSSxDQUFDVCxPQUFPVyxPQUFaLEVBQXFCO0FBQ2pCSCxlQUFPRyxPQUFQLEdBQWlCLHdCQUFqQjtBQUNIOztBQUVELFFBQUksQ0FBQ1gsT0FBT1ksVUFBWixFQUF3QjtBQUNwQkosZUFBT0ksVUFBUCxHQUFvQixtREFBcEI7QUFDSDs7QUFFRDtBQUNBO0FBQ0EsV0FBT0osTUFBUDtBQUNIOztBQUVELCtEQUFlLDREQUFBSyxDQUFVO0FBQ3JCTixZQURxQjtBQUVyQk8sVUFBTSxjQUZlLENBRUE7QUFGQSxDQUFWLEVBR1p4QixRQUhZLENBQWYsRSIsImZpbGUiOiJhcHAuOTc1NTA1N2U2YWMwZDc0OGM1ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG4vLyBJbXBvcnQgYm9vdHN0cmFwIGNsYXNzZXMgdGhyb3VnaCBub2RlIG1vZHVsZVxyXG4vLyByZWR1eCBmb3JtIGFsbG93cyB0aGlzIGNvbXBvbmVudCB0byB0YWxrIGRpcmVjdGx5IHRvIHRoZSByZWR1eCBzdG9yZVxyXG5jbGFzcyBQb3N0c05ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXJGaWVsZChmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZT0gYGZvcm0tZ3JvdXAgJHtmaWVsZC5tZXRhLnRvdWNoZWQgJiYgZmllbGQubWV0YS5lcnJvciA/ICdoYXMtZGFuZ2VyJyA6ICcnfWBcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGhhcy1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57ZmllbGQubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1oZWxwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpZWxkLm1ldGEudG91Y2hlZCA/IGZpZWxkLm1ldGEuZXJyb3IgOiAnJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSAvL0dlbmVyYWxpemUgcmVuZGVyRmllbGQgY29tcG9uZW50IGFuZCBwYXNzIGFyYml0cmFyeSBwcm9wc1xyXG5cclxuICAgIG9uU3VibWl0KHZhbHVlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoYW5kbGVTdWJtaXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgLy8gaGFuZGxlU3VibWl0IHByb3BlcnR5IGJlaW5nIHBhc3NlZCB0byBQb3N0c05ldyBjb21wb25lbnQgb24gYmVoYWxmIG9mIHJlZHV4IEZvcm1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpKX0+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgLy8gcmVwcmVzZW50cyBhIHVuaXF1ZSBpbnB1dCBhdmFpbGFibGUgdG8gdXNlclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiIC8vIGNvbm5lY3RlZCB0byBlcnJvciB2YWxpZGF0aW9uIHByb3BlcnR5IG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9IC8vIHRoaXMgY29tcG9uZW50IGFjY2VwdHMgYSBmdW5jdGlvbiBvciBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IHRoZSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGaWVsZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc3QgQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGaWVsZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgdGV4dC14cy1yaWdodFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGUodmFsdWVzKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgY29uc3QgZXJyb3JzID0ge307XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhlIGlucHV0cyBmcm9tICd2YWx1ZXMnXHJcbiAgICBpZiAoIXZhbHVlcy50aXRsZSB8fCB2YWx1ZXMudGl0bGUubGVuZ3RoIDwgMykge1xyXG4gICAgICAgIGVycm9ycy50aXRsZSA9IFwiRW50ZXIgYSB0aXRsZSBvZiBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgZm9yIHRoaXMgcG9zdC5cIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZhbHVlcy5jb250ZW50KSB7XHJcbiAgICAgICAgZXJyb3JzLmNvbnRlbnQgPSBcIllvdSBuZWVkIHNvbWUgY29udGVudC5cIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZhbHVlcy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZXJyb3JzLmNhdGVnb3JpZXMgPSBcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCBvbmUgY2F0ZWdvcnkgZm9yIHRoaXMgcG9zdC5cIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBlcnJvcnMgaXMgZW1wdHksIHRoZSBmb3JtIHdpbGwgc3VibWl0XHJcbiAgICAvLyBpZiBlcnJvcnMgaGFzIGFueSBwcm9wZXJ0aWVzLCByZWR1eCBmb3JtIGFzc3VtZXMgZm9ybSBpcyBpbnZhbGlkXHJcbiAgICByZXR1cm4gZXJyb3JzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xyXG4gICAgdmFsaWRhdGUsXHJcbiAgICBmb3JtOiAnUG9zdHNOZXdGb3JtJyAvLyBVbmlxdWUgc2NyZWVuIGlkZW50aWZpZXMgZGlmZmVyZW50IGZvcm1zIGFuZCBhbGxvd3MgcmVkdXggdG8gbWVyZ2UgZm9ybSBzdGF0ZXMgc2VwZXJhdGVseSBcclxufSkoUG9zdHNOZXcpOyJdLCJzb3VyY2VSb290IjoiIn0=