webpackHotUpdate("app",{

/***/ "./src/components/projects_new.jsx":
/*!*****************************************!*\
  !*** ./src/components/projects_new.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _dropdown_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown_select */ "./src/components/dropdown_select.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






// ADD AUTHORIZATION CLASUE BEFORE ACCESS TO THIS COMPONENT
// const projectTypes = [ 
//     { key: 'web', value: 'website', label: 'website' },
//     { key: 'design', value: 'design', label: 'design' },
//     { key: 'review', value: 'review', label: 'review' },
//     { key: 'social', value: 'social', label: 'social' }, 
//     { key: 'model', value: 'model', label: 'model' },
// ]
const projectTypes = ['website', 'design', 'review', 'social', 'model'];

class ProjectsNew extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
            field.meta.touched ? field.meta.error : ''
        );
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'form-group' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'right text-xs-right' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
                    { className: 'btn-sm btn-primary', to: NeomorphSettings.path + 'projects' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: 'glyphicon glyphicon-chevron-left' }),
                    'View Projects'
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h1',
                null,
                'ProjectsNew!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'form',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                    label: 'Title:',
                    name: 'title',
                    component: this.renderField
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                    label: 'Type:',
                    name: 'type',
                    options: 'website, design',
                    component: _dropdown_select__WEBPACK_IMPORTED_MODULE_2__["default"],
                    choices: projectTypes,
                    className: 'form-control'
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                    label: 'Project Content',
                    name: 'content',
                    component: this.renderField
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-success' },
                    'Submit'
                )
            )
        );
    }
}

function validate(values) {
    // console.log(values) -> {title: 'xxxxasda', type: 'sadfasdf', content: 'sdfsadfadf'}
    const errors = {};

    // Validate inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.type) {
        errors.type = 'Please select a project type';
    }

    if (!values.content || values.content.length < 50) {
        errors.content = 'Please write a description about the content at least 50 characters long';
    }

    // If errors is empty, the form will be submitted
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
    validate,
    form: 'ProjectsNewForm' //provide a UNIQUE string for all different forms
})(ProjectsNew));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0c19uZXcuanN4Il0sIm5hbWVzIjpbInByb2plY3RUeXBlcyIsIlByb2plY3RzTmV3IiwicmVuZGVyRmllbGQiLCJmaWVsZCIsImxhYmVsIiwiaW5wdXQiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwicmVuZGVyIiwiTmVvbW9ycGhTZXR0aW5ncyIsInBhdGgiLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInRpdGxlIiwidHlwZSIsImNvbnRlbnQiLCJsZW5ndGgiLCJyZWR1eEZvcm0iLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsZUFBZSxDQUNqQixTQURpQixFQUNOLFFBRE0sRUFDSSxRQURKLEVBQ2MsUUFEZCxFQUN3QixPQUR4QixDQUFyQjs7QUFJQSxNQUFNQyxXQUFOLFNBQTBCLCtDQUExQixDQUFvQztBQUNoQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFRQSxzQkFBTUM7QUFBZCxhQURKO0FBRUk7QUFDSSwyQkFBVSxjQURkO0FBRUksc0JBQUs7QUFGVCxlQUdRRCxNQUFNRSxLQUhkLEVBRko7QUFPS0Ysa0JBQU1HLElBQU4sQ0FBV0MsT0FBWCxHQUFxQkosTUFBTUcsSUFBTixDQUFXRSxLQUFoQyxHQUF3QztBQVA3QyxTQURKO0FBV0g7O0FBRURDLGFBQVM7QUFDTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLHFCQUFmO0FBQ0k7QUFBQyx5RUFBRDtBQUFBLHNCQUFNLFdBQVUsb0JBQWhCLEVBQXFDLElBQUlDLGlCQUFpQkMsSUFBakIsR0FBd0IsVUFBakU7QUFDSSx5RkFBTSxXQUFVLGtDQUFoQixHQURKO0FBQUE7QUFBQTtBQURKLGFBREo7QUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEo7QUFRSTtBQUFBO0FBQUE7QUFDSSwyRUFBQyxnREFBRDtBQUNJLDJCQUFNLFFBRFY7QUFFSSwwQkFBSyxPQUZUO0FBR0ksK0JBQVcsS0FBS1Q7QUFIcEIsa0JBREo7QUFNSSwyRUFBQyxnREFBRDtBQUNJLDJCQUFNLE9BRFY7QUFFSSwwQkFBSyxNQUZUO0FBR0ksNkJBQVEsaUJBSFo7QUFJSSwrQkFBVyx3REFKZjtBQUtJLDZCQUFTRixZQUxiO0FBTUksK0JBQVU7QUFOZCxrQkFOSjtBQWNJLDJFQUFDLGdEQUFEO0FBQ0ksMkJBQU0saUJBRFY7QUFFSSwwQkFBSyxTQUZUO0FBR0ksK0JBQVcsS0FBS0U7QUFIcEIsa0JBZEo7QUFtQkk7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQztBQUFBO0FBQUE7QUFuQko7QUFSSixTQURKO0FBZ0NIO0FBaEQrQjs7QUFtRHBDLFNBQVNVLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3RCO0FBQ0EsVUFBTUMsU0FBUyxFQUFmOztBQUVBO0FBQ0EsUUFBSSxDQUFDRCxPQUFPRSxLQUFaLEVBQW1CO0FBQ2ZELGVBQU9DLEtBQVAsR0FBZSxnQkFBZjtBQUNIOztBQUVELFFBQUksQ0FBQ0YsT0FBT0csSUFBWixFQUFrQjtBQUNkRixlQUFPRSxJQUFQLEdBQWMsOEJBQWQ7QUFDSDs7QUFFRCxRQUFJLENBQUNILE9BQU9JLE9BQVIsSUFBbUJKLE9BQU9JLE9BQVAsQ0FBZUMsTUFBZixHQUF3QixFQUEvQyxFQUFvRDtBQUNoREosZUFBT0csT0FBUCxHQUFpQiwwRUFBakI7QUFDSDs7QUFFRDtBQUNBO0FBQ0EsV0FBT0gsTUFBUDtBQUNIOztBQUVELCtEQUFlLDREQUFBSyxDQUFVO0FBQ3JCUCxZQURxQjtBQUVyQlEsVUFBTSxpQkFGZSxDQUVHO0FBRkgsQ0FBVixFQUdYbkIsV0FIVyxDQUFmLEUiLCJmaWxlIjoiYXBwLjExNDJiNjNjMWVlNjE5MjFiNTBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG5pbXBvcnQgRHJvcGRvd25TZWxlY3QgZnJvbSAnLi9kcm9wZG93bl9zZWxlY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5cclxuLy8gQUREIEFVVEhPUklaQVRJT04gQ0xBU1VFIEJFRk9SRSBBQ0NFU1MgVE8gVEhJUyBDT01QT05FTlRcclxuLy8gY29uc3QgcHJvamVjdFR5cGVzID0gWyBcclxuLy8gICAgIHsga2V5OiAnd2ViJywgdmFsdWU6ICd3ZWJzaXRlJywgbGFiZWw6ICd3ZWJzaXRlJyB9LFxyXG4vLyAgICAgeyBrZXk6ICdkZXNpZ24nLCB2YWx1ZTogJ2Rlc2lnbicsIGxhYmVsOiAnZGVzaWduJyB9LFxyXG4vLyAgICAgeyBrZXk6ICdyZXZpZXcnLCB2YWx1ZTogJ3JldmlldycsIGxhYmVsOiAncmV2aWV3JyB9LFxyXG4vLyAgICAgeyBrZXk6ICdzb2NpYWwnLCB2YWx1ZTogJ3NvY2lhbCcsIGxhYmVsOiAnc29jaWFsJyB9LCBcclxuLy8gICAgIHsga2V5OiAnbW9kZWwnLCB2YWx1ZTogJ21vZGVsJywgbGFiZWw6ICdtb2RlbCcgfSxcclxuLy8gXVxyXG5jb25zdCBwcm9qZWN0VHlwZXMgPSBbIFxyXG4gICAgJ3dlYnNpdGUnLCAnZGVzaWduJywgJ3JldmlldycsICdzb2NpYWwnLCAnbW9kZWwnXHJcbl1cclxuXHJcbmNsYXNzIFByb2plY3RzTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlckZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e2ZpZWxkLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGQuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2ZpZWxkLm1ldGEudG91Y2hlZCA/IGZpZWxkLm1ldGEuZXJyb3IgOiAnJ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IHRleHQteHMtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4tc20gYnRuLXByaW1hcnlcIiB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Byb2plY3RzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+UHJvamVjdHNOZXchPC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpdGxlOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGU6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPVwid2Vic2l0ZSwgZGVzaWduXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtEcm9wZG93blNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlcz17cHJvamVjdFR5cGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdCBDb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGUodmFsdWVzKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpIC0+IHt0aXRsZTogJ3h4eHhhc2RhJywgdHlwZTogJ3NhZGZhc2RmJywgY29udGVudDogJ3NkZnNhZGZhZGYnfVxyXG4gICAgY29uc3QgZXJyb3JzID0ge31cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dHMgZnJvbSAndmFsdWVzJ1xyXG4gICAgaWYgKCF2YWx1ZXMudGl0bGUpIHtcclxuICAgICAgICBlcnJvcnMudGl0bGUgPSBcIkVudGVyIGEgdGl0bGUhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF2YWx1ZXMudHlwZSkge1xyXG4gICAgICAgIGVycm9ycy50eXBlID0gJ1BsZWFzZSBzZWxlY3QgYSBwcm9qZWN0IHR5cGUnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdmFsdWVzLmNvbnRlbnQgfHwgdmFsdWVzLmNvbnRlbnQubGVuZ3RoIDwgNTAgKSB7XHJcbiAgICAgICAgZXJyb3JzLmNvbnRlbnQgPSAnUGxlYXNlIHdyaXRlIGEgZGVzY3JpcHRpb24gYWJvdXQgdGhlIGNvbnRlbnQgYXQgbGVhc3QgNTAgY2hhcmFjdGVycyBsb25nJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBlcnJvcnMgaXMgZW1wdHksIHRoZSBmb3JtIHdpbGwgYmUgc3VibWl0dGVkXHJcbiAgICAvLyBJZiBlcnJvcnMgaGFzICphbnkqIHByb3BlcnRpZXMsIHJlZHV4IGZvcm0gYXNzdW1lcyBmb3JtIGlzIGludmFsaWRcclxuICAgIHJldHVybiBlcnJvcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XHJcbiAgICB2YWxpZGF0ZSxcclxuICAgIGZvcm06ICdQcm9qZWN0c05ld0Zvcm0nIC8vcHJvdmlkZSBhIFVOSVFVRSBzdHJpbmcgZm9yIGFsbCBkaWZmZXJlbnQgZm9ybXNcclxufSkgKFByb2plY3RzTmV3KTsiXSwic291cmNlUm9vdCI6IiJ9