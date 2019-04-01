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
    renderTitleField(field) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'form-group' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'label',
                null,
                'Title'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({
                className: 'form-control',
                type: 'text'
            }, field.input))
        );
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'form',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"] // represents a unique input available to user
            , { name: 'title',
                component: this.renderTitleField // this component accepts a function or component used to display the field
            })
        );
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
    form: 'PostsNewForm' // Unique screen identifies different forms and allows redux to merge form states seperately 
})(PostsNew));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0c19uZXcuanN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwicmVuZGVyVGl0bGVGaWVsZCIsImZpZWxkIiwiaW5wdXQiLCJyZW5kZXIiLCJyZWR1eEZvcm0iLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsUUFBTixTQUF1QiwrQ0FBdkIsQ0FBaUM7QUFDN0JDLHFCQUFpQkMsS0FBakIsRUFBd0I7QUFDcEIsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUNJLDJCQUFVLGNBRGQ7QUFFSSxzQkFBSztBQUZULGVBR1FBLE1BQU1DLEtBSGQ7QUFGSixTQURKO0FBVUg7O0FBRURDLGFBQVM7QUFDTCxlQUNJO0FBQUE7QUFBQTtBQUNJLHVFQUFDLGdEQUFELENBQU87QUFBUCxnQkFDSSxNQUFLLE9BRFQ7QUFFSSwyQkFBVyxLQUFLSCxnQkFGcEIsQ0FFc0M7QUFGdEM7QUFESixTQURKO0FBUUg7QUF2QjRCOztBQTBCakMsK0RBQWUsNERBQUFJLENBQVU7QUFDckJDLFVBQU0sY0FEZSxDQUNBO0FBREEsQ0FBVixFQUVaTixRQUZZLENBQWYsRSIsImZpbGUiOiJhcHAuOGVjMDBmYzM0MDUxMmFkNjM3NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG4vLyByZWR1eCBmb3JtIGFsbG93cyB0aGlzIGNvbXBvbmVudCB0byB0YWxrIGRpcmVjdGx5IHRvIHRoZSByZWR1eCBzdG9yZVxyXG5jbGFzcyBQb3N0c05ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXJUaXRsZUZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGQuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCAvLyByZXByZXNlbnRzIGEgdW5pcXVlIGlucHV0IGF2YWlsYWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyVGl0bGVGaWVsZH0gLy8gdGhpcyBjb21wb25lbnQgYWNjZXB0cyBhIGZ1bmN0aW9uIG9yIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgdGhlIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xyXG4gICAgZm9ybTogJ1Bvc3RzTmV3Rm9ybScgLy8gVW5pcXVlIHNjcmVlbiBpZGVudGlmaWVzIGRpZmZlcmVudCBmb3JtcyBhbmQgYWxsb3dzIHJlZHV4IHRvIG1lcmdlIGZvcm0gc3RhdGVzIHNlcGVyYXRlbHkgXHJcbn0pKFBvc3RzTmV3KTsiXSwic291cmNlUm9vdCI6IiJ9