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
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: NeomorphSettings.path + 'new-post', component: _components_posts_new__WEBPACK_IMPORTED_MODULE_6__["default"] }),
          '\\',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInJlbmRlciIsIk5lb21vcnBoU2V0dGluZ3MiLCJwYXRoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhcHAiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTUEsR0FBTixTQUFrQiwrQ0FBbEIsQ0FBNEI7QUFDMUJDLFdBQVM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxZQUFSO0FBQ0UsaUVBQUMsK0NBQUQsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUMsaUVBQUQ7QUFBQTtBQUNFLHFFQUFDLHNEQUFELElBQU8sTUFBTUMsaUJBQWlCQyxJQUFqQixHQUF3QixjQUFyQyxFQUFxRCxXQUFXLHFEQUFoRSxHQURGO0FBRUUscUVBQUMsc0RBQUQsSUFBTyxNQUFNRCxpQkFBaUJDLElBQWpCLEdBQXdCLGFBQXJDLEVBQW9ELFdBQVcsc0RBQS9ELEdBRkY7QUFHRSxxRUFBQyxzREFBRCxJQUFPLFdBQVAsRUFBYSxNQUFNRCxpQkFBaUJDLElBQWpCLEdBQXdCLFVBQTNDLEVBQXVELFdBQVcsdURBQWxFLEdBSEY7QUFNRSxxRUFBQyxzREFBRCxJQUFPLE1BQU1ELGlCQUFpQkMsSUFBakIsR0FBd0IsVUFBckMsRUFBaUQsV0FBVyw2REFBNUQsR0FORjtBQUFBO0FBUUUscUVBQUMsc0RBQUQsSUFBTyxXQUFQLEVBQWEsTUFBTUQsaUJBQWlCQyxJQUFqQixHQUF3QixPQUEzQyxFQUFvRCxXQUFXLHlEQUEvRCxHQVJGO0FBU0UscUVBQUMsc0RBQUQsSUFBTyxXQUFQLEVBQWEsTUFBTUQsaUJBQWlCQyxJQUFqQixHQUF3QixHQUEzQyxFQUFnRCxXQUFXLHlEQUEzRCxHQVRGO0FBQUE7QUFXRSxxRUFBQyxzREFBRCxJQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLG1EQUEzQjtBQVhGO0FBREYsT0FGRjtBQWlCRSxpRUFBQywrQ0FBRDtBQWpCRixLQURGO0FBcUJEO0FBM0J5Qjs7QUE4QjVCLFNBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzlCLFNBQU8sRUFBRUMsS0FBS0QsS0FBUCxFQUFQO0FBQ0Q7O0FBRUQsK0RBQWUsMkRBQUFFLENBQVFILGVBQVIsRUFBeUJKLEdBQXpCLENBQWYsRSIsImZpbGUiOiJhcHAuMTBlZWIwYTA4YzEzMzRmZTI2NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVzdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlcic7XHJcbmltcG9ydCBQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RzJztcclxuaW1wb3J0IFBvc3RzTmV3IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHNfbmV3JztcclxuaW1wb3J0IFByb2plY3RzSW5kZXggZnJvbSAnLi9wcm9qZWN0c19pbmRleCc7XHJcbmltcG9ydCBQcm9qZWN0c05ldyBmcm9tICcuL3Byb2plY3RzX25ldyc7XHJcbmltcG9ydCBQcm9qZWN0c1Nob3cgZnJvbSAnLi9wcm9qZWN0c19zaG93JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb250YWluZXJzL3NlYXJjaF9iYXInO1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4uL2NvbnRhaW5lcnMvc2VhcmNoX3Jlc3VsdCc7XHJcblxyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vbm90LWZvdW5kJztcclxuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uL2xvYWRpbmctaWNvbi5wbmcnO1xyXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnLi4vcGxhY2Vob2xkZXIucG5nJztcclxuXHJcbi8vIEJ1aWx0IHdpdGggaGVscCB1c2luZyB0aGUgZm9sbG93aW5nIHJlc291cmNzXHJcbi8vIE11aGFtbWFkIE11aHNpbiAtIGh0dHBzOi8vd3d3LnNtYXNoaW5nbWFnYXppbmUuY29tLzIwMTgvMDMvcmVhY3Qtd29yZHByZXNzLXdlYi1hcHAvXHJcbi8vIGh0dHBzOi8vc25pcGNhcnQuY29tL2Jsb2cvcmVhY3Rqcy13b3JkcHJlc3MtcmVzdC1hcGktZXhhbXBsZVxyXG5cclxuLy8gTG9hZCB0aGUgU2FzcyBmaWxlXHJcbi8vIHJlcXVpcmUoJy4vc3R5bGUuc2NzcycpO1xyXG5cclxuLy9Jbml0aWFsaXplIGFwcCBzdGF0ZSBoZXJlLCB3aXRoIHBhdGggYW5kIGN1c3RvbWUgcG9zdCB0eXBlc1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdBcHAgc3RhdGU6JyArIHRoaXMuc3RhdGUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XHJcbiAgICAvLyA8U2VhcmNoQmFyIC8+XHJcbiAgICAvLyA8U2VhcmNoUmVzdWx0IC8+XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwicGFnZS1pbm5lclwiPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFN3aXRjaD4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwcm9qZWN0cy9uZXcnfSBjb21wb25lbnQ9e1Byb2plY3RzTmV3fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Byb2plY3QvOmlkJ30gY29tcG9uZW50PXtQcm9qZWN0c1Nob3d9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncHJvamVjdHMnfSBjb21wb25lbnQ9e1Byb2plY3RzSW5kZXh9IC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiA8Um91dGUgZXhhY3QgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3BhZ2UvOnNsdWcnfSBjb21wb25lbnQ9e1BhZ2VTaG93fSAvPiAqL31cclxuICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAnOnBhZ2UnfSBjb21wb25lbnQ9e1BhZ2V9IC8+ICovfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ25ldy1wb3N0J30gY29tcG9uZW50PXtQb3N0c05ld30gLz5cXFxyXG4gICAgICAgICAgICB7LyogPFJvdXRlIHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICduZXctZW50cnknfSBjb21wb25lbnQ9e1Bvc3RzTmV3fSAvPiBtYWtlIGEgY29tcG9uZW50IGZvciBjcmVhdGluZyBhbGwgcG9zdCB0eXBlcyAqL31cclxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwb3N0cyd9IGNvbXBvbmVudD17UG9zdHN9IC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAnLyd9IGNvbXBvbmVudD17UG9zdHN9IC8+IHsvKiAvdGhlIHJvb3QgcGF0aCAqL31cclxuICAgICAgICAgICAgey8qIDxSb3V0ZSBleGFjdCBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHM/cG9zdF90eXBlPXByb2plY3RzJ30gY29tcG9uZW50PXtQcm9qZWN0c30gLz4gKi99XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XHJcbiAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gIHJldHVybiB7IGFwcDogc3RhdGUgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7Il0sInNvdXJjZVJvb3QiOiIifQ==