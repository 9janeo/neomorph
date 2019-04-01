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
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({
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
                Component: this.renderTitleField // this component accepts a function or component used to display the field
            })
        );
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
    form: 'PostsNewForm' // Unique screen identifies different forms and allows redux to merge form states seperately 
})(PostsNew));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0c19uZXcuanN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwicmVuZGVyVGl0bGVGaWVsZCIsImZpZWxkIiwiaW5wdXQiLCJyZW5kZXIiLCJyZWR1eEZvcm0iLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsUUFBTixTQUF1QiwrQ0FBdkIsQ0FBaUM7QUFDN0JDLHFCQUFpQkMsS0FBakIsRUFBd0I7QUFDcEIsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUNJLHNCQUFLO0FBRFQsZUFFUUEsTUFBTUMsS0FGZDtBQURKLFNBREo7QUFRSDs7QUFFREMsYUFBUztBQUNMLGVBQ0k7QUFBQTtBQUFBO0FBQ0ksdUVBQUMsZ0RBQUQsQ0FBTztBQUFQLGdCQUNJLE1BQUssT0FEVDtBQUVJLDJCQUFXLEtBQUtILGdCQUZwQixDQUVzQztBQUZ0QztBQURKLFNBREo7QUFRSDtBQXJCNEI7O0FBd0JqQywrREFBZSw0REFBQUksQ0FBVTtBQUNyQkMsVUFBTSxjQURlLENBQ0E7QUFEQSxDQUFWLEVBRVpOLFFBRlksQ0FBZixFIiwiZmlsZSI6ImFwcC45OTZiNzViZmFlMWY0NzYwYTBhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcbi8vIHJlZHV4IGZvcm0gYWxsb3dzIHRoaXMgY29tcG9uZW50IHRvIHRhbGsgZGlyZWN0bHkgdG8gdGhlIHJlZHV4IHN0b3JlXHJcbmNsYXNzIFBvc3RzTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclRpdGxlRmllbGQoZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZC5pbnB1dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIC8vIHJlcHJlc2VudHMgYSB1bmlxdWUgaW5wdXQgYXZhaWxhYmxlIHRvIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudD17dGhpcy5yZW5kZXJUaXRsZUZpZWxkfSAvLyB0aGlzIGNvbXBvbmVudCBhY2NlcHRzIGEgZnVuY3Rpb24gb3IgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSB0aGUgZmllbGRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XHJcbiAgICBmb3JtOiAnUG9zdHNOZXdGb3JtJyAvLyBVbmlxdWUgc2NyZWVuIGlkZW50aWZpZXMgZGlmZmVyZW50IGZvcm1zIGFuZCBhbGxvd3MgcmVkdXggdG8gbWVyZ2UgZm9ybSBzdGF0ZXMgc2VwZXJhdGVseSBcclxufSkoUG9zdHNOZXcpOyJdLCJzb3VyY2VSb290IjoiIn0=