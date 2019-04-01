webpackHotUpdate("app",{

/***/ "./src/components/app.jsx":
/*!********************************!*\
  !*** ./src/components/app.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header */ "./src/header.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer */ "./src/footer.jsx");
/* harmony import */ var _components_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/posts */ "./src/components/posts.jsx");
/* harmony import */ var _components_posts_new__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/posts_new */ "./src/components/posts_new.jsx");
/* harmony import */ var _projects_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects_index */ "./src/components/projects_index.jsx");
/* harmony import */ var _projects_new__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects_new */ "./src/components/projects_new.jsx");
/* harmony import */ var _projects_show__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects_show */ "./src/components/projects_show.jsx");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page */ "./src/components/page.jsx");
/* harmony import */ var _containers_search_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/search_bar */ "./src/containers/search_bar.jsx");
/* harmony import */ var _containers_search_result__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/search_result */ "./src/containers/search_result.jsx");
/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../not-found */ "./src/not-found.jsx");
/* harmony import */ var _loading_icon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../loading-icon.png */ "./src/loading-icon.png");
/* harmony import */ var _loading_icon_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_loading_icon_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _placeholder_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../placeholder.png */ "./src/placeholder.png");
/* harmony import */ var _placeholder_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_placeholder_png__WEBPACK_IMPORTED_MODULE_15__);

// import { createstore } from 'redux';


















// Built with help using the following resourcs
// Muhammad Muhsin - https://www.smashingmagazine.com/2018/03/react-wordpress-web-app/
// https://snipcart.com/blog/reactjs-wordpress-rest-api-example

// Load the Sass file
// require('./style.scss');

//Initialize app state here, with path and custome post types

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    //console.log('App state:' + this.state);
    // console.log(store.getState());
    // <SearchBar />
    // <SearchResult />
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { id: 'page-inner' },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_3__["default"], null),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'container' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: NeomorphSettings.path + 'projects/new', component: _projects_new__WEBPACK_IMPORTED_MODULE_8__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: NeomorphSettings.path + 'project/:id', component: _projects_show__WEBPACK_IMPORTED_MODULE_9__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: NeomorphSettings.path + 'projects', component: _projects_index__WEBPACK_IMPORTED_MODULE_7__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: NeomorphSettings.path + 'posts/new', component: _components_posts_new__WEBPACK_IMPORTED_MODULE_6__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: NeomorphSettings.path + 'posts', component: _components_posts__WEBPACK_IMPORTED_MODULE_5__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: NeomorphSettings.path + '/', component: _components_posts__WEBPACK_IMPORTED_MODULE_5__["default"] }),
          ' ',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '*', component: _not_found__WEBPACK_IMPORTED_MODULE_13__["default"] })
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)
    );
  }
}

function mapStateToProps(state) {
  return { app: state };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(App));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInJlbmRlciIsIk5lb21vcnBoU2V0dGluZ3MiLCJwYXRoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhcHAiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTUEsR0FBTixTQUFrQiwrQ0FBbEIsQ0FBNEI7QUFDMUJDLFdBQVM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxZQUFSO0FBQ0UsaUVBQUMsK0NBQUQsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUMsaUVBQUQ7QUFBQTtBQUNFLHFFQUFDLHNEQUFELElBQU8sTUFBTUMsaUJBQWlCQyxJQUFqQixHQUF3QixjQUFyQyxFQUFxRCxXQUFXLHFEQUFoRSxHQURGO0FBRUUscUVBQUMsc0RBQUQsSUFBTyxNQUFNRCxpQkFBaUJDLElBQWpCLEdBQXdCLGFBQXJDLEVBQW9ELFdBQVcsc0RBQS9ELEdBRkY7QUFHRSxxRUFBQyxzREFBRCxJQUFPLFdBQVAsRUFBYSxNQUFNRCxpQkFBaUJDLElBQWpCLEdBQXdCLFVBQTNDLEVBQXVELFdBQVcsdURBQWxFLEdBSEY7QUFNRSxxRUFBQyxzREFBRCxJQUFPLFdBQVAsRUFBYSxNQUFNRCxpQkFBaUJDLElBQWpCLEdBQXdCLFdBQTNDLEVBQXdELFdBQVcsNkRBQW5FLEdBTkY7QUFPRSxxRUFBQyxzREFBRCxJQUFPLFdBQVAsRUFBYSxNQUFNRCxpQkFBaUJDLElBQWpCLEdBQXdCLE9BQTNDLEVBQW9ELFdBQVcseURBQS9ELEdBUEY7QUFRRSxxRUFBQyxzREFBRCxJQUFPLFdBQVAsRUFBYSxNQUFNRCxpQkFBaUJDLElBQWpCLEdBQXdCLEdBQTNDLEVBQWdELFdBQVcseURBQTNELEdBUkY7QUFBQTtBQVVFLHFFQUFDLHNEQUFELElBQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVcsbURBQTNCO0FBVkY7QUFERixPQUZGO0FBZ0JFLGlFQUFDLCtDQUFEO0FBaEJGLEtBREY7QUFvQkQ7QUExQnlCOztBQTZCNUIsU0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUIsU0FBTyxFQUFFQyxLQUFLRCxLQUFQLEVBQVA7QUFDRDs7QUFFRCwrREFBZSwyREFBQUUsQ0FBUUgsZUFBUixFQUF5QkosR0FBekIsQ0FBZixFIiwiZmlsZSI6ImFwcC43NjUwZTNlZGNjNDgyZTNiZWRjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZXN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyJztcclxuaW1wb3J0IFBvc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHMnO1xyXG5pbXBvcnQgUG9zdHNOZXcgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0c19uZXcnO1xyXG5pbXBvcnQgUHJvamVjdHNJbmRleCBmcm9tICcuL3Byb2plY3RzX2luZGV4JztcclxuaW1wb3J0IFByb2plY3RzTmV3IGZyb20gJy4vcHJvamVjdHNfbmV3JztcclxuaW1wb3J0IFByb2plY3RzU2hvdyBmcm9tICcuL3Byb2plY3RzX3Nob3cnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2UnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbnRhaW5lcnMvc2VhcmNoX2Jhcic7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi4vY29udGFpbmVycy9zZWFyY2hfcmVzdWx0JztcclxuXHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9ub3QtZm91bmQnO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vbG9hZGluZy1pY29uLnBuZyc7XHJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICcuLi9wbGFjZWhvbGRlci5wbmcnO1xyXG5cclxuLy8gQnVpbHQgd2l0aCBoZWxwIHVzaW5nIHRoZSBmb2xsb3dpbmcgcmVzb3VyY3NcclxuLy8gTXVoYW1tYWQgTXVoc2luIC0gaHR0cHM6Ly93d3cuc21hc2hpbmdtYWdhemluZS5jb20vMjAxOC8wMy9yZWFjdC13b3JkcHJlc3Mtd2ViLWFwcC9cclxuLy8gaHR0cHM6Ly9zbmlwY2FydC5jb20vYmxvZy9yZWFjdGpzLXdvcmRwcmVzcy1yZXN0LWFwaS1leGFtcGxlXHJcblxyXG4vLyBMb2FkIHRoZSBTYXNzIGZpbGVcclxuLy8gcmVxdWlyZSgnLi9zdHlsZS5zY3NzJyk7XHJcblxyXG4vL0luaXRpYWxpemUgYXBwIHN0YXRlIGhlcmUsIHdpdGggcGF0aCBhbmQgY3VzdG9tZSBwb3N0IHR5cGVzXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ0FwcCBzdGF0ZTonICsgdGhpcy5zdGF0ZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKTtcclxuICAgIC8vIDxTZWFyY2hCYXIgLz5cclxuICAgIC8vIDxTZWFyY2hSZXN1bHQgLz5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJwYWdlLWlubmVyXCI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8U3dpdGNoPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Byb2plY3RzL25ldyd9IGNvbXBvbmVudD17UHJvamVjdHNOZXd9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncHJvamVjdC86aWQnfSBjb21wb25lbnQ9e1Byb2plY3RzU2hvd30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwcm9qZWN0cyd9IGNvbXBvbmVudD17UHJvamVjdHNJbmRleH0gLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncGFnZS86c2x1Zyd9IGNvbXBvbmVudD17UGFnZVNob3d9IC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICc6cGFnZSd9IGNvbXBvbmVudD17UGFnZX0gLz4gKi99XHJcbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHMvbmV3J30gY29tcG9uZW50PXtQb3N0c05ld30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwb3N0cyd9IGNvbXBvbmVudD17UG9zdHN9IC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAnLyd9IGNvbXBvbmVudD17UG9zdHN9IC8+IHsvKiAvdGhlIHJvb3QgcGF0aCAqL31cclxuICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHM/cG9zdF90eXBlPXByb2plY3RzJ30gY29tcG9uZW50PXtQcm9qZWN0c30gLz4gKi99XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XHJcbiAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gIHJldHVybiB7IGFwcDogc3RhdGUgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7Il0sInNvdXJjZVJvb3QiOiIifQ==