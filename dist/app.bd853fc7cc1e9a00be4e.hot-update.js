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
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: NeomorphSettings.path + 'post/new', component: _components_posts_new__WEBPACK_IMPORTED_MODULE_6__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: NeomorphSettings.path + 'project/:id', component: _projects_show__WEBPACK_IMPORTED_MODULE_9__["default"] }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: NeomorphSettings.path + 'projects', component: _projects_index__WEBPACK_IMPORTED_MODULE_7__["default"] }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInJlbmRlciIsIk5lb21vcnBoU2V0dGluZ3MiLCJwYXRoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhcHAiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTUEsR0FBTixTQUFrQiwrQ0FBbEIsQ0FBNEI7QUFDMUJDLFdBQVM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxZQUFSO0FBQ0UsaUVBQUMsK0NBQUQsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUMsaUVBQUQ7QUFBQTtBQUNFLHFFQUFDLHNEQUFELElBQU8sTUFBTUMsaUJBQWlCQyxJQUFqQixHQUF3QixjQUFyQyxFQUFxRCxXQUFXLHFEQUFoRSxHQURGO0FBRUUscUVBQUMsc0RBQUQsSUFBTyxNQUFNRCxpQkFBaUJDLElBQWpCLEdBQXdCLFVBQXJDLEVBQWlELFdBQVcsNkRBQTVELEdBRkY7QUFHRSxxRUFBQyxzREFBRCxJQUFPLE1BQU1ELGlCQUFpQkMsSUFBakIsR0FBd0IsYUFBckMsRUFBb0QsV0FBVyxzREFBL0QsR0FIRjtBQUlFLHFFQUFDLHNEQUFELElBQU8sV0FBUCxFQUFhLE1BQU1ELGlCQUFpQkMsSUFBakIsR0FBd0IsVUFBM0MsRUFBdUQsV0FBVyx1REFBbEUsR0FKRjtBQU9FLHFFQUFDLHNEQUFELElBQU8sV0FBUCxFQUFhLE1BQU1ELGlCQUFpQkMsSUFBakIsR0FBd0IsT0FBM0MsRUFBb0QsV0FBVyx5REFBL0QsR0FQRjtBQVFFLHFFQUFDLHNEQUFELElBQU8sV0FBUCxFQUFhLE1BQU1ELGlCQUFpQkMsSUFBakIsR0FBd0IsR0FBM0MsRUFBZ0QsV0FBVyx5REFBM0QsR0FSRjtBQUFBO0FBVUUscUVBQUMsc0RBQUQsSUFBTyxNQUFLLEdBQVosRUFBZ0IsV0FBVyxtREFBM0I7QUFWRjtBQURGLE9BRkY7QUFnQkUsaUVBQUMsK0NBQUQ7QUFoQkYsS0FERjtBQW9CRDtBQTFCeUI7O0FBNkI1QixTQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QixTQUFPLEVBQUVDLEtBQUtELEtBQVAsRUFBUDtBQUNEOztBQUVELCtEQUFlLDJEQUFBRSxDQUFRSCxlQUFSLEVBQXlCSixHQUF6QixDQUFmLEUiLCJmaWxlIjoiYXBwLmJkODUzZmM3Y2MxZTlhMDBiZTRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgY3JlYXRlc3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXInO1xyXG5pbXBvcnQgUG9zdHMgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0cyc7XHJcbmltcG9ydCBQb3N0c05ldyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RzX25ldyc7XHJcbmltcG9ydCBQcm9qZWN0c0luZGV4IGZyb20gJy4vcHJvamVjdHNfaW5kZXgnO1xyXG5pbXBvcnQgUHJvamVjdHNOZXcgZnJvbSAnLi9wcm9qZWN0c19uZXcnO1xyXG5pbXBvcnQgUHJvamVjdHNTaG93IGZyb20gJy4vcHJvamVjdHNfc2hvdyc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZSc7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29udGFpbmVycy9zZWFyY2hfYmFyJztcclxuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuLi9jb250YWluZXJzL3NlYXJjaF9yZXN1bHQnO1xyXG5cclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL25vdC1mb3VuZCc7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi9sb2FkaW5nLWljb24ucG5nJztcclxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJy4uL3BsYWNlaG9sZGVyLnBuZyc7XHJcblxyXG4vLyBCdWlsdCB3aXRoIGhlbHAgdXNpbmcgdGhlIGZvbGxvd2luZyByZXNvdXJjc1xyXG4vLyBNdWhhbW1hZCBNdWhzaW4gLSBodHRwczovL3d3dy5zbWFzaGluZ21hZ2F6aW5lLmNvbS8yMDE4LzAzL3JlYWN0LXdvcmRwcmVzcy13ZWItYXBwL1xyXG4vLyBodHRwczovL3NuaXBjYXJ0LmNvbS9ibG9nL3JlYWN0anMtd29yZHByZXNzLXJlc3QtYXBpLWV4YW1wbGVcclxuXHJcbi8vIExvYWQgdGhlIFNhc3MgZmlsZVxyXG4vLyByZXF1aXJlKCcuL3N0eWxlLnNjc3MnKTtcclxuXHJcbi8vSW5pdGlhbGl6ZSBhcHAgc3RhdGUgaGVyZSwgd2l0aCBwYXRoIGFuZCBjdXN0b21lIHBvc3QgdHlwZXNcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnQXBwIHN0YXRlOicgKyB0aGlzLnN0YXRlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpO1xyXG4gICAgLy8gPFNlYXJjaEJhciAvPlxyXG4gICAgLy8gPFNlYXJjaFJlc3VsdCAvPlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cInBhZ2UtaW5uZXJcIj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxTd2l0Y2g+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncHJvamVjdHMvbmV3J30gY29tcG9uZW50PXtQcm9qZWN0c05ld30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwb3N0L25ldyd9IGNvbXBvbmVudD17UG9zdHNOZXd9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncHJvamVjdC86aWQnfSBjb21wb25lbnQ9e1Byb2plY3RzU2hvd30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwcm9qZWN0cyd9IGNvbXBvbmVudD17UHJvamVjdHNJbmRleH0gLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncGFnZS86c2x1Zyd9IGNvbXBvbmVudD17UGFnZVNob3d9IC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICc6cGFnZSd9IGNvbXBvbmVudD17UGFnZX0gLz4gKi99ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHMnfSBjb21wb25lbnQ9e1Bvc3RzfSAvPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJy8nfSBjb21wb25lbnQ9e1Bvc3RzfSAvPiB7LyogL3RoZSByb290IHBhdGggKi99XHJcbiAgICAgICAgICAgIHsvKiA8Um91dGUgZXhhY3QgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Bvc3RzP3Bvc3RfdHlwZT1wcm9qZWN0cyd9IGNvbXBvbmVudD17UHJvamVjdHN9IC8+ICovfVxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICByZXR1cm4geyBhcHA6IHN0YXRlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcHApOyJdLCJzb3VyY2VSb290IjoiIn0=