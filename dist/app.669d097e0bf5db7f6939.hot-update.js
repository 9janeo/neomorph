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

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0c19uZXcuanN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwicmVuZGVyRmllbGQiLCJmaWVsZCIsImxhYmVsIiwiaW5wdXQiLCJtZXRhIiwiZXJyb3IiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJoYW5kbGVTdWJtaXQiLCJwcm9wcyIsImJpbmQiLCJ2YWxpZGF0ZSIsImVycm9ycyIsInRpdGxlIiwibGVuZ3RoIiwiY29udGVudCIsImNhdGVnb3JpZXMiLCJyZWR1eEZvcm0iLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsUUFBTixTQUF1QiwrQ0FBdkIsQ0FBaUM7QUFDN0JDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUE7QUFBUUEsc0JBQU1DO0FBQWQsYUFESjtBQUVJO0FBQ0ksMkJBQVUsY0FEZDtBQUVJLHNCQUFLO0FBRlQsZUFHUUQsTUFBTUUsS0FIZCxFQUZKO0FBT0tGLGtCQUFNRyxJQUFOLENBQVdDO0FBUGhCLFNBREo7QUFXSCxLQWI0QixDQWEzQjs7QUFFRkMsYUFBU0MsTUFBVCxFQUFnQjtBQUNaQyxnQkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0g7O0FBRURHLGFBQVM7QUFDTCxjQUFNLEVBQUVDLFlBQUYsS0FBbUIsS0FBS0MsS0FBOUI7O0FBR0EsZUFDSTtBQUFBO0FBQUEsY0FBTSxVQUFVRCxhQUFhLEtBQUtMLFFBQUwsQ0FBY08sSUFBZCxDQUFtQixJQUFuQixDQUFiLENBQWhCO0FBQ0ksdUVBQUMsZ0RBQUQsQ0FBTztBQUFQLGdCQUNJLE9BQU0sT0FEVjtBQUVJLHNCQUFLLE9BRlQsQ0FFaUI7QUFGakIsa0JBR0ksV0FBVyxLQUFLYixXQUhwQixDQUdpQztBQUhqQyxjQURKO0FBTUksdUVBQUMsZ0RBQUQ7QUFDSSx1QkFBTSxZQURWO0FBRUksc0JBQUssWUFGVDtBQUdJLDJCQUFXLEtBQUtBO0FBSHBCLGNBTko7QUFXSSx1RUFBQyxnREFBRDtBQUNJLHVCQUFNLGNBRFY7QUFFSSxzQkFBSyxTQUZUO0FBR0ksMkJBQVcsS0FBS0E7QUFIcEIsY0FYSjtBQWdCSTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQTtBQWhCSixTQURKO0FBb0JIO0FBM0M0Qjs7QUE4Q2pDLFNBQVNjLFFBQVQsQ0FBa0JQLE1BQWxCLEVBQTBCO0FBQ3RCO0FBQ0EsVUFBTVEsU0FBUyxFQUFmOztBQUVBO0FBQ0EsUUFBSSxDQUFDUixPQUFPUyxLQUFSLElBQWlCVCxPQUFPUyxLQUFQLENBQWFDLE1BQWIsR0FBc0IsQ0FBM0MsRUFBOEM7QUFDMUNGLGVBQU9DLEtBQVAsR0FBZSx1REFBZjtBQUNIOztBQUVELFFBQUksQ0FBQ1QsT0FBT1csT0FBWixFQUFxQjtBQUNqQkgsZUFBT0csT0FBUCxHQUFpQix3QkFBakI7QUFDSDs7QUFFRCxRQUFJLENBQUNYLE9BQU9ZLFVBQVosRUFBd0I7QUFDcEJKLGVBQU9JLFVBQVAsR0FBb0IsbURBQXBCO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBLFdBQU9KLE1BQVA7QUFDSDs7QUFFRCwrREFBZSw0REFBQUssQ0FBVTtBQUNyQk4sWUFEcUI7QUFFckJPLFVBQU0sY0FGZSxDQUVBO0FBRkEsQ0FBVixFQUdadEIsUUFIWSxDQUFmLEUiLCJmaWxlIjoiYXBwLjY2OWQwOTdlMGJmNWRiN2Y2OTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcclxuLy8gcmVkdXggZm9ybSBhbGxvd3MgdGhpcyBjb21wb25lbnQgdG8gdGFsayBkaXJlY3RseSB0byB0aGUgcmVkdXggc3RvcmVcclxuY2xhc3MgUG9zdHNOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyRmllbGQoZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57ZmllbGQubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtmaWVsZC5tZXRhLmVycm9yfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSAvL0dlbmVyYWxpemUgcmVuZGVyRmllbGQgY29tcG9uZW50IGFuZCBwYXNzIGFyYml0cmFyeSBwcm9wc1xyXG5cclxuICAgIG9uU3VibWl0KHZhbHVlcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoYW5kbGVTdWJtaXQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHRoaXMub25TdWJtaXQuYmluZCh0aGlzKSl9PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIC8vIHJlcHJlc2VudHMgYSB1bmlxdWUgaW5wdXQgYXZhaWxhYmxlIHRvIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIiAvLyBjb25uZWN0ZWQgdG8gZXJyb3IgdmFsaWRhdGlvbiBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZpZWxkfSAvLyB0aGlzIGNvbXBvbmVudCBhY2NlcHRzIGEgZnVuY3Rpb24gb3IgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSB0aGUgZmllbGRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3N0IENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZXMpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGUgaW5wdXRzIGZyb20gJ3ZhbHVlcydcclxuICAgIGlmICghdmFsdWVzLnRpdGxlIHx8IHZhbHVlcy50aXRsZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgZXJyb3JzLnRpdGxlID0gXCJFbnRlciBhIHRpdGxlIG9mIGF0IGxlYXN0IDMgY2hhcmFjdGVycyBmb3IgdGhpcyBwb3N0LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsdWVzLmNvbnRlbnQpIHtcclxuICAgICAgICBlcnJvcnMuY29udGVudCA9IFwiWW91IG5lZWQgc29tZSBjb250ZW50LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsdWVzLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBlcnJvcnMuY2F0ZWdvcmllcyA9IFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IG9uZSBjYXRlZ29yeSBmb3IgdGhpcyBwb3N0LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGVycm9ycyBpcyBlbXB0eSwgdGhlIGZvcm0gd2lsbCBzdWJtaXRcclxuICAgIC8vIGlmIGVycm9ycyBoYXMgYW55IHByb3BlcnRpZXMsIHJlZHV4IGZvcm0gYXNzdW1lcyBmb3JtIGlzIGludmFsaWRcclxuICAgIHJldHVybiBlcnJvcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XHJcbiAgICB2YWxpZGF0ZSxcclxuICAgIGZvcm06ICdQb3N0c05ld0Zvcm0nIC8vIFVuaXF1ZSBzY3JlZW4gaWRlbnRpZmllcyBkaWZmZXJlbnQgZm9ybXMgYW5kIGFsbG93cyByZWR1eCB0byBtZXJnZSBmb3JtIHN0YXRlcyBzZXBlcmF0ZWx5IFxyXG59KShQb3N0c05ldyk7Il0sInNvdXJjZVJvb3QiOiIifQ==