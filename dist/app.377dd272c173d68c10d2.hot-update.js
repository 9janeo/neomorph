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
            { className: 'form-group' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'label',
                null,
                field.label
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({
                className: 'form-control',
                type: 'text'
            }, field.input)),
            field.meta.error
        );
    } //Generalize renderField component and pass arbitrary props

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'form',
            null,
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
                { type: 'submit', className: 'btn btn-primary' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0c19uZXcuanN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwicmVuZGVyRmllbGQiLCJmaWVsZCIsImxhYmVsIiwiaW5wdXQiLCJtZXRhIiwiZXJyb3IiLCJyZW5kZXIiLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInRpdGxlIiwibGVuZ3RoIiwiY29udGVudCIsImNhdGVnb3JpZXMiLCJyZWR1eEZvcm0iLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsUUFBTixTQUF1QiwrQ0FBdkIsQ0FBaUM7QUFDN0JDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUE7QUFBUUEsc0JBQU1DO0FBQWQsYUFESjtBQUVJO0FBQ0ksMkJBQVUsY0FEZDtBQUVJLHNCQUFLO0FBRlQsZUFHUUQsTUFBTUUsS0FIZCxFQUZKO0FBT0tGLGtCQUFNRyxJQUFOLENBQVdDO0FBUGhCLFNBREo7QUFXSCxLQWI0QixDQWEzQjs7QUFFRkMsYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0ksdUVBQUMsZ0RBQUQsQ0FBTztBQUFQLGdCQUNJLE9BQU0sT0FEVjtBQUVJLHNCQUFLLE9BRlQsQ0FFaUI7QUFGakIsa0JBR0ksV0FBVyxLQUFLTixXQUhwQixDQUdpQztBQUhqQyxjQURKO0FBTUksdUVBQUMsZ0RBQUQ7QUFDSSx1QkFBTSxZQURWO0FBRUksc0JBQUssWUFGVDtBQUdJLDJCQUFXLEtBQUtBO0FBSHBCLGNBTko7QUFXSSx1RUFBQyxnREFBRDtBQUNJLHVCQUFNLGNBRFY7QUFFSSxzQkFBSyxTQUZUO0FBR0ksMkJBQVcsS0FBS0E7QUFIcEIsY0FYSjtBQWdCSTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQTtBQWhCSixTQURKO0FBb0JIO0FBcEM0Qjs7QUF1Q2pDLFNBQVNPLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCO0FBQ0EsVUFBTUMsU0FBUyxFQUFmOztBQUVBO0FBQ0EsUUFBSSxDQUFDRCxPQUFPRSxLQUFSLElBQWlCRixPQUFPRSxLQUFQLENBQWFDLE1BQWIsR0FBc0IsQ0FBM0MsRUFBOEM7QUFDMUNGLGVBQU9DLEtBQVAsR0FBZSx1REFBZjtBQUNIOztBQUVELFFBQUksQ0FBQ0YsT0FBT0ksT0FBWixFQUFxQjtBQUNqQkgsZUFBT0csT0FBUCxHQUFpQix3QkFBakI7QUFDSDs7QUFFRCxRQUFJLENBQUNKLE9BQU9LLFVBQVosRUFBd0I7QUFDcEJKLGVBQU9JLFVBQVAsR0FBb0IsbURBQXBCO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBLFdBQU9KLE1BQVA7QUFDSDs7QUFFRCwrREFBZSw0REFBQUssQ0FBVTtBQUNyQlAsWUFEcUI7QUFFckJRLFVBQU0sY0FGZSxDQUVBO0FBRkEsQ0FBVixFQUdaaEIsUUFIWSxDQUFmLEUiLCJmaWxlIjoiYXBwLjM3N2RkMjcyYzE3M2Q2OGMxMGQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcclxuLy8gcmVkdXggZm9ybSBhbGxvd3MgdGhpcyBjb21wb25lbnQgdG8gdGFsayBkaXJlY3RseSB0byB0aGUgcmVkdXggc3RvcmVcclxuY2xhc3MgUG9zdHNOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyRmllbGQoZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57ZmllbGQubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtmaWVsZC5tZXRhLmVycm9yfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSAvL0dlbmVyYWxpemUgcmVuZGVyRmllbGQgY29tcG9uZW50IGFuZCBwYXNzIGFyYml0cmFyeSBwcm9wc1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCAvLyByZXByZXNlbnRzIGEgdW5pcXVlIGlucHV0IGF2YWlsYWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCIgLy8gY29ubmVjdGVkIHRvIGVycm9yIHZhbGlkYXRpb24gcHJvcGVydHkgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGaWVsZH0gLy8gdGhpcyBjb21wb25lbnQgYWNjZXB0cyBhIGZ1bmN0aW9uIG9yIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgdGhlIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZpZWxkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9zdCBDb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZpZWxkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGUodmFsdWVzKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgY29uc3QgZXJyb3JzID0ge307XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgdGhlIGlucHV0cyBmcm9tICd2YWx1ZXMnXHJcbiAgICBpZiAoIXZhbHVlcy50aXRsZSB8fCB2YWx1ZXMudGl0bGUubGVuZ3RoIDwgMykge1xyXG4gICAgICAgIGVycm9ycy50aXRsZSA9IFwiRW50ZXIgYSB0aXRsZSBvZiBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgZm9yIHRoaXMgcG9zdC5cIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZhbHVlcy5jb250ZW50KSB7XHJcbiAgICAgICAgZXJyb3JzLmNvbnRlbnQgPSBcIllvdSBuZWVkIHNvbWUgY29udGVudC5cIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZhbHVlcy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZXJyb3JzLmNhdGVnb3JpZXMgPSBcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCBvbmUgY2F0ZWdvcnkgZm9yIHRoaXMgcG9zdC5cIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBlcnJvcnMgaXMgZW1wdHksIHRoZSBmb3JtIHdpbGwgc3VibWl0XHJcbiAgICAvLyBpZiBlcnJvcnMgaGFzIGFueSBwcm9wZXJ0aWVzLCByZWR1eCBmb3JtIGFzc3VtZXMgZm9ybSBpcyBpbnZhbGlkXHJcbiAgICByZXR1cm4gZXJyb3JzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xyXG4gICAgdmFsaWRhdGUsXHJcbiAgICBmb3JtOiAnUG9zdHNOZXdGb3JtJyAvLyBVbmlxdWUgc2NyZWVuIGlkZW50aWZpZXMgZGlmZmVyZW50IGZvcm1zIGFuZCBhbGxvd3MgcmVkdXggdG8gbWVyZ2UgZm9ybSBzdGF0ZXMgc2VwZXJhdGVseSBcclxufSkoUG9zdHNOZXcpOyJdLCJzb3VyY2VSb290IjoiIn0=