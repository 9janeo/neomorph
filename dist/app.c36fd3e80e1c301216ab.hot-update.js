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
        const { meta } = field; // jandy jsx destructuring to get meta from field object
        const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;

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
                meta.touched ? meta.error : ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0c19uZXcuanN4Il0sIm5hbWVzIjpbIlBvc3RzTmV3IiwicmVuZGVyRmllbGQiLCJmaWVsZCIsIm1ldGEiLCJjbGFzc05hbWUiLCJ0b3VjaGVkIiwiZXJyb3IiLCJsYWJlbCIsImlucHV0Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwicHJvcHMiLCJiaW5kIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJ0aXRsZSIsImxlbmd0aCIsImNvbnRlbnQiLCJjYXRlZ29yaWVzIiwicmVkdXhGb3JtIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsUUFBTixTQUF1QiwrQ0FBdkIsQ0FBaUM7QUFDN0JDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTSxFQUFDQyxJQUFELEtBQVNELEtBQWYsQ0FEZSxDQUNPO0FBQ3RCLGNBQU1FLFlBQVksY0FBYUQsS0FBS0UsT0FBTCxJQUFnQkYsS0FBS0csS0FBckIsR0FBNkIsWUFBN0IsR0FBNEMsRUFBRyxFQUE5RTs7QUFFQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsdUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFBUUosc0JBQU1LO0FBQWQsYUFESjtBQUVJO0FBQ0ksMkJBQVUsY0FEZDtBQUVJLHNCQUFLO0FBRlQsZUFHUUwsTUFBTU0sS0FIZCxFQUZKO0FBT0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsV0FBZjtBQUNLTCxxQkFBS0UsT0FBTCxHQUFlRixLQUFLRyxLQUFwQixHQUE0QjtBQURqQztBQVBKLFNBREo7QUFhSCxLQWxCNEIsQ0FrQjNCOztBQUVGRyxhQUFTQyxNQUFULEVBQWdCO0FBQ1pDLGdCQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDSDs7QUFFREcsYUFBUztBQUNMLGNBQU0sRUFBRUMsWUFBRixLQUFtQixLQUFLQyxLQUE5QjtBQUNBOzs7QUFHQSxlQUNJO0FBQUE7QUFBQSxjQUFNLFVBQVVELGFBQWEsS0FBS0wsUUFBTCxDQUFjTyxJQUFkLENBQW1CLElBQW5CLENBQWIsQ0FBaEI7QUFDSSx1RUFBQyxnREFBRCxDQUFPO0FBQVAsZ0JBQ0ksT0FBTSxPQURWO0FBRUksc0JBQUssT0FGVCxDQUVpQjtBQUZqQixrQkFHSSxXQUFXLEtBQUtmLFdBSHBCLENBR2lDO0FBSGpDLGNBREo7QUFNSSx1RUFBQyxnREFBRDtBQUNJLHVCQUFNLFlBRFY7QUFFSSxzQkFBSyxZQUZUO0FBR0ksMkJBQVcsS0FBS0E7QUFIcEIsY0FOSjtBQVdJLHVFQUFDLGdEQUFEO0FBQ0ksdUJBQU0sY0FEVjtBQUVJLHNCQUFLLFNBRlQ7QUFHSSwyQkFBVyxLQUFLQTtBQUhwQixjQVhKO0FBZ0JJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSwrQkFBaEM7QUFBQTtBQUFBO0FBaEJKLFNBREo7QUFvQkg7QUFqRDRCOztBQW9EakMsU0FBU2dCLFFBQVQsQ0FBa0JQLE1BQWxCLEVBQTBCO0FBQ3RCO0FBQ0EsVUFBTVEsU0FBUyxFQUFmOztBQUVBO0FBQ0EsUUFBSSxDQUFDUixPQUFPUyxLQUFSLElBQWlCVCxPQUFPUyxLQUFQLENBQWFDLE1BQWIsR0FBc0IsQ0FBM0MsRUFBOEM7QUFDMUNGLGVBQU9DLEtBQVAsR0FBZSx1REFBZjtBQUNIOztBQUVELFFBQUksQ0FBQ1QsT0FBT1csT0FBWixFQUFxQjtBQUNqQkgsZUFBT0csT0FBUCxHQUFpQix3QkFBakI7QUFDSDs7QUFFRCxRQUFJLENBQUNYLE9BQU9ZLFVBQVosRUFBd0I7QUFDcEJKLGVBQU9JLFVBQVAsR0FBb0IsbURBQXBCO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBLFdBQU9KLE1BQVA7QUFDSDs7QUFFRCwrREFBZSw0REFBQUssQ0FBVTtBQUNyQk4sWUFEcUI7QUFFckJPLFVBQU0sY0FGZSxDQUVBO0FBRkEsQ0FBVixFQUdaeEIsUUFIWSxDQUFmLEUiLCJmaWxlIjoiYXBwLmMzNmZkM2U4MGUxYzMwMTIxNmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcclxuLy8gSW1wb3J0IGJvb3RzdHJhcCBjbGFzc2VzIHRocm91Z2ggbm9kZSBtb2R1bGVcclxuLy8gcmVkdXggZm9ybSBhbGxvd3MgdGhpcyBjb21wb25lbnQgdG8gdGFsayBkaXJlY3RseSB0byB0aGUgcmVkdXggc3RvcmVcclxuY2xhc3MgUG9zdHNOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyRmllbGQoZmllbGQpIHtcclxuICAgICAgICBjb25zdCB7bWV0YX0gPSBmaWVsZDsgLy8gamFuZHkganN4IGRlc3RydWN0dXJpbmcgdG8gZ2V0IG1ldGEgZnJvbSBmaWVsZCBvYmplY3RcclxuICAgICAgICBjb25zdCBjbGFzc05hbWU9IGBmb3JtLWdyb3VwICR7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyAnaGFzLWRhbmdlcicgOiAnJ31gXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBoYXMtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e2ZpZWxkLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZC5pbnB1dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaGVscFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgPyBtZXRhLmVycm9yIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0gLy9HZW5lcmFsaXplIHJlbmRlckZpZWxkIGNvbXBvbmVudCBhbmQgcGFzcyBhcmJpdHJhcnkgcHJvcHNcclxuXHJcbiAgICBvblN1Ym1pdCh2YWx1ZXMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIC8vIGhhbmRsZVN1Ym1pdCBwcm9wZXJ0eSBiZWluZyBwYXNzZWQgdG8gUG9zdHNOZXcgY29tcG9uZW50IG9uIGJlaGFsZiBvZiByZWR1eCBGb3JtXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHRoaXMub25TdWJtaXQuYmluZCh0aGlzKSl9PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIC8vIHJlcHJlc2VudHMgYSB1bmlxdWUgaW5wdXQgYXZhaWxhYmxlIHRvIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIiAvLyBjb25uZWN0ZWQgdG8gZXJyb3IgdmFsaWRhdGlvbiBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZpZWxkfSAvLyB0aGlzIGNvbXBvbmVudCBhY2NlcHRzIGEgZnVuY3Rpb24gb3IgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSB0aGUgZmllbGRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3N0IENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHRleHQteHMtcmlnaHRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlcykge1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHRoZSBpbnB1dHMgZnJvbSAndmFsdWVzJ1xyXG4gICAgaWYgKCF2YWx1ZXMudGl0bGUgfHwgdmFsdWVzLnRpdGxlLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICBlcnJvcnMudGl0bGUgPSBcIkVudGVyIGEgdGl0bGUgb2YgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGZvciB0aGlzIHBvc3QuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2YWx1ZXMuY29udGVudCkge1xyXG4gICAgICAgIGVycm9ycy5jb250ZW50ID0gXCJZb3UgbmVlZCBzb21lIGNvbnRlbnQuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2YWx1ZXMuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGVycm9ycy5jYXRlZ29yaWVzID0gXCJQbGVhc2UgZW50ZXIgYXQgbGVhc3Qgb25lIGNhdGVnb3J5IGZvciB0aGlzIHBvc3QuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgZXJyb3JzIGlzIGVtcHR5LCB0aGUgZm9ybSB3aWxsIHN1Ym1pdFxyXG4gICAgLy8gaWYgZXJyb3JzIGhhcyBhbnkgcHJvcGVydGllcywgcmVkdXggZm9ybSBhc3N1bWVzIGZvcm0gaXMgaW52YWxpZFxyXG4gICAgcmV0dXJuIGVycm9ycztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcclxuICAgIHZhbGlkYXRlLFxyXG4gICAgZm9ybTogJ1Bvc3RzTmV3Rm9ybScgLy8gVW5pcXVlIHNjcmVlbiBpZGVudGlmaWVzIGRpZmZlcmVudCBmb3JtcyBhbmQgYWxsb3dzIHJlZHV4IHRvIG1lcmdlIGZvcm0gc3RhdGVzIHNlcGVyYXRlbHkgXHJcbn0pKFBvc3RzTmV3KTsiXSwic291cmNlUm9vdCI6IiJ9