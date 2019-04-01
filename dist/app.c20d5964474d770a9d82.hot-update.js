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
/* harmony import */ var _projects_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects_index */ "./src/components/projects_index.jsx");
/* harmony import */ var _projects_new__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects_new */ "./src/components/projects_new.jsx");
/* harmony import */ var _projects_show__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects_show */ "./src/components/projects_show.jsx");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page */ "./src/components/page.jsx");
/* harmony import */ var _containers_search_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/search_bar */ "./src/containers/search_bar.jsx");
/* harmony import */ var _containers_search_result__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/search_result */ "./src/containers/search_result.jsx");
/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../not-found */ "./src/not-found.jsx");
/* harmony import */ var _loading_icon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loading-icon.png */ "./src/loading-icon.png");
/* harmony import */ var _loading_icon_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_loading_icon_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _placeholder_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../placeholder.png */ "./src/placeholder.png");
/* harmony import */ var _placeholder_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_placeholder_png__WEBPACK_IMPORTED_MODULE_14__);

// import { createstore } from 'redux';






// import Post from '../containers/post';











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
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: NeomorphSettings.path + 'projects/new', component: _projects_new__WEBPACK_IMPORTED_MODULE_7__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: NeomorphSettings.path + 'project/:id', component: _projects_show__WEBPACK_IMPORTED_MODULE_8__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: NeomorphSettings.path + 'projects', component: _projects_index__WEBPACK_IMPORTED_MODULE_6__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: NeomorphSettings.path + 'posts', component: _components_posts__WEBPACK_IMPORTED_MODULE_5__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: NeomorphSettings.path + '/', component: _components_posts__WEBPACK_IMPORTED_MODULE_5__["default"] }),
          ' ',
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '*', component: _not_found__WEBPACK_IMPORTED_MODULE_12__["default"] })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInJlbmRlciIsIk5lb21vcnBoU2V0dGluZ3MiLCJwYXRoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhcHAiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFNQSxHQUFOLFNBQWtCLCtDQUFsQixDQUE0QjtBQUMxQkMsV0FBUztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxJQUFHLFlBQVI7QUFDRSxpRUFBQywrQ0FBRCxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQyxpRUFBRDtBQUFBO0FBQ0UscUVBQUMsc0RBQUQsSUFBTyxNQUFNQyxpQkFBaUJDLElBQWpCLEdBQXdCLGNBQXJDLEVBQXFELFdBQVcscURBQWhFLEdBREY7QUFFRSxxRUFBQyxzREFBRCxJQUFPLE1BQU1ELGlCQUFpQkMsSUFBakIsR0FBd0IsYUFBckMsRUFBb0QsV0FBVyxzREFBL0QsR0FGRjtBQUdFLHFFQUFDLHNEQUFELElBQU8sV0FBUCxFQUFhLE1BQU1ELGlCQUFpQkMsSUFBakIsR0FBd0IsVUFBM0MsRUFBdUQsV0FBVyx1REFBbEUsR0FIRjtBQU1FLHFFQUFDLHNEQUFELElBQU8sV0FBUCxFQUFhLE1BQU1ELGlCQUFpQkMsSUFBakIsR0FBd0IsT0FBM0MsRUFBb0QsV0FBVyx5REFBL0QsR0FORjtBQU9FLHFFQUFDLHNEQUFELElBQU8sV0FBUCxFQUFhLE1BQU1ELGlCQUFpQkMsSUFBakIsR0FBd0IsR0FBM0MsRUFBZ0QsV0FBVyx5REFBM0QsR0FQRjtBQUFBO0FBU0UscUVBQUMsc0RBQUQsSUFBTyxNQUFLLEdBQVosRUFBZ0IsV0FBVyxtREFBM0I7QUFURjtBQURGLE9BRkY7QUFlRSxpRUFBQywrQ0FBRDtBQWZGLEtBREY7QUFtQkQ7QUF6QnlCOztBQTRCNUIsU0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUIsU0FBTyxFQUFFQyxLQUFLRCxLQUFQLEVBQVA7QUFDRDs7QUFFRCwrREFBZSwyREFBQUUsQ0FBUUgsZUFBUixFQUF5QkosR0FBekIsQ0FBZixFIiwiZmlsZSI6ImFwcC5jMjBkNTk2NDQ3NGQ3NzBhOWQ4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZXN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyJztcclxuaW1wb3J0IFBvc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHMnO1xyXG4vLyBpbXBvcnQgUG9zdCBmcm9tICcuLi9jb250YWluZXJzL3Bvc3QnO1xyXG5pbXBvcnQgUHJvamVjdHNJbmRleCBmcm9tICcuL3Byb2plY3RzX2luZGV4JztcclxuaW1wb3J0IFByb2plY3RzTmV3IGZyb20gJy4vcHJvamVjdHNfbmV3JztcclxuaW1wb3J0IFByb2plY3RzU2hvdyBmcm9tICcuL3Byb2plY3RzX3Nob3cnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2UnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbnRhaW5lcnMvc2VhcmNoX2Jhcic7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi4vY29udGFpbmVycy9zZWFyY2hfcmVzdWx0JztcclxuXHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9ub3QtZm91bmQnO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vbG9hZGluZy1pY29uLnBuZyc7XHJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICcuLi9wbGFjZWhvbGRlci5wbmcnO1xyXG5cclxuLy8gQnVpbHQgd2l0aCBoZWxwIHVzaW5nIHRoZSBmb2xsb3dpbmcgcmVzb3VyY3NcclxuLy8gTXVoYW1tYWQgTXVoc2luIC0gaHR0cHM6Ly93d3cuc21hc2hpbmdtYWdhemluZS5jb20vMjAxOC8wMy9yZWFjdC13b3JkcHJlc3Mtd2ViLWFwcC9cclxuLy8gaHR0cHM6Ly9zbmlwY2FydC5jb20vYmxvZy9yZWFjdGpzLXdvcmRwcmVzcy1yZXN0LWFwaS1leGFtcGxlXHJcblxyXG4vLyBMb2FkIHRoZSBTYXNzIGZpbGVcclxuLy8gcmVxdWlyZSgnLi9zdHlsZS5zY3NzJyk7XHJcblxyXG4vL0luaXRpYWxpemUgYXBwIHN0YXRlIGhlcmUsIHdpdGggcGF0aCBhbmQgY3VzdG9tZSBwb3N0IHR5cGVzXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ0FwcCBzdGF0ZTonICsgdGhpcy5zdGF0ZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKTtcclxuICAgIC8vIDxTZWFyY2hCYXIgLz5cclxuICAgIC8vIDxTZWFyY2hSZXN1bHQgLz5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJwYWdlLWlubmVyXCI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8U3dpdGNoPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Byb2plY3RzL25ldyd9IGNvbXBvbmVudD17UHJvamVjdHNOZXd9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncHJvamVjdC86aWQnfSBjb21wb25lbnQ9e1Byb2plY3RzU2hvd30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwcm9qZWN0cyd9IGNvbXBvbmVudD17UHJvamVjdHNJbmRleH0gLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncGFnZS86c2x1Zyd9IGNvbXBvbmVudD17UGFnZVNob3d9IC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICc6cGFnZSd9IGNvbXBvbmVudD17UGFnZX0gLz4gKi99XHJcbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHMnfSBjb21wb25lbnQ9e1Bvc3RzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJy8nfSBjb21wb25lbnQ9e1Bvc3RzfSAvPiB7LyogL3RoZSByb290IHBhdGggKi99XHJcbiAgICAgICAgICAgIHsvKiA8Um91dGUgZXhhY3QgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Bvc3RzP3Bvc3RfdHlwZT1wcm9qZWN0cyd9IGNvbXBvbmVudD17UHJvamVjdHN9IC8+ICovfVxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICByZXR1cm4geyBhcHA6IHN0YXRlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcHApOyJdLCJzb3VyY2VSb290IjoiIn0=