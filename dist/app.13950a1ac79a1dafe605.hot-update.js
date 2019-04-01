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
            }, field.input))
        );
    } //Generalize renderField component and pass arbitrary props

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'form',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"] // represents a unique input available to user
            , { label: 'Title',
                name: 'title',
                component: this.renderField // this component accepts a function or component used to display the field
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
            })
        );
    }
}

function validate(values) {
    console.log(values);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
    validate,
    form: 'PostsNewForm' // Unique screen identifies different forms and allows redux to merge form states seperately 
})(PostsNew));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0c19uZXcuanN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwicmVuZGVyRmllbGQiLCJmaWVsZCIsImxhYmVsIiwiaW5wdXQiLCJyZW5kZXIiLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZWR1eEZvcm0iLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsUUFBTixTQUF1QiwrQ0FBdkIsQ0FBaUM7QUFDN0JDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUE7QUFBUUEsc0JBQU1DO0FBQWQsYUFESjtBQUVJO0FBQ0ksMkJBQVUsY0FEZDtBQUVJLHNCQUFLO0FBRlQsZUFHUUQsTUFBTUUsS0FIZDtBQUZKLFNBREo7QUFVSCxLQVo0QixDQVkzQjs7QUFFRkMsYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0ksdUVBQUMsZ0RBQUQsQ0FBTztBQUFQLGdCQUNJLE9BQU0sT0FEVjtBQUVJLHNCQUFLLE9BRlQ7QUFHSSwyQkFBVyxLQUFLSixXQUhwQixDQUdpQztBQUhqQyxjQURKO0FBTUksdUVBQUMsZ0RBQUQ7QUFDSSx1QkFBTSxZQURWO0FBRUksc0JBQUssWUFGVDtBQUdJLDJCQUFXLEtBQUtBO0FBSHBCLGNBTko7QUFXSSx1RUFBQyxnREFBRDtBQUNJLHVCQUFNLGNBRFY7QUFFSSxzQkFBSyxTQUZUO0FBR0ksMkJBQVcsS0FBS0E7QUFIcEI7QUFYSixTQURKO0FBbUJIO0FBbEM0Qjs7QUFxQ2pDLFNBQVNLLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCQyxZQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDSDs7QUFFRCwrREFBZSw0REFBQUcsQ0FBVTtBQUNyQkosWUFEcUI7QUFFckJLLFVBQU0sY0FGZSxDQUVBO0FBRkEsQ0FBVixFQUdaWCxRQUhZLENBQWYsRSIsImZpbGUiOiJhcHAuMTM5NTBhMWFjNzlhMWRhZmU2MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG4vLyByZWR1eCBmb3JtIGFsbG93cyB0aGlzIGNvbXBvbmVudCB0byB0YWxrIGRpcmVjdGx5IHRvIHRoZSByZWR1eCBzdG9yZVxyXG5jbGFzcyBQb3N0c05ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXJGaWVsZChmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPntmaWVsZC5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGQuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSAvL0dlbmVyYWxpemUgcmVuZGVyRmllbGQgY29tcG9uZW50IGFuZCBwYXNzIGFyYml0cmFyeSBwcm9wc1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCAvLyByZXByZXNlbnRzIGEgdW5pcXVlIGlucHV0IGF2YWlsYWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9IC8vIHRoaXMgY29tcG9uZW50IGFjY2VwdHMgYSBmdW5jdGlvbiBvciBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IHRoZSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGaWVsZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc3QgQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGaWVsZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XHJcbiAgICB2YWxpZGF0ZSxcclxuICAgIGZvcm06ICdQb3N0c05ld0Zvcm0nIC8vIFVuaXF1ZSBzY3JlZW4gaWRlbnRpZmllcyBkaWZmZXJlbnQgZm9ybXMgYW5kIGFsbG93cyByZWR1eCB0byBtZXJnZSBmb3JtIHN0YXRlcyBzZXBlcmF0ZWx5IFxyXG59KShQb3N0c05ldyk7Il0sInNvdXJjZVJvb3QiOiIifQ==