webpackHotUpdate("app",{

/***/ "./src/reducers/index.jsx":
/*!********************************!*\
  !*** ./src/reducers/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app_reducer */ "./src/reducers/app_reducer.jsx");
/* harmony import */ var _reducer_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer_search */ "./src/reducers/reducer_search.jsx");
/* harmony import */ var _reducer_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer_pages */ "./src/reducers/reducer_pages.jsx");
/* harmony import */ var _reducer_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer_projects */ "./src/reducers/reducer_projects.jsx");
/* harmony import */ var _reducer_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer_posts */ "./src/reducers/reducer_posts.jsx");







// import { reducer as formReducer } from 'redux-form';
// import PostsReducer from './reducer_posts'

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _app_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  pages: _reducer_pages__WEBPACK_IMPORTED_MODULE_4__["default"],
  search: _reducer_search__WEBPACK_IMPORTED_MODULE_3__["default"],
  projects: _reducer_projects__WEBPACK_IMPORTED_MODULE_5__["default"],
  posts: _reducer_posts__WEBPACK_IMPORTED_MODULE_6__["default"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_1__["reducer"]
});

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/reducer_posts.jsx":
/*!****************************************!*\
  !*** ./src/reducers/reducer_posts.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");


// import projects_index from '../components/posts_index';

/* harmony default export */ __webpack_exports__["default"] = (function (state = [], action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS"]:
            // console.log ("fetching..:" + [action.payload.data].params);
            // const post = action.payload.data;
            // // const newState = [ ...state ];
            // console.log ("Reducer Post:" + post);
            // newState[post.id] = post;
            // return newState;
            return { [action.payload.data.id]: action.payload.data, state };
        case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS"]:
            // console.log(action.payload.data); // expect a collection of post
            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapKeys(action.payload.data, 'id'); // enables us to do simple Id lookups on state.post in future
        default:
            return state;
    }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9yZWR1Y2VyX3Bvc3RzLmpzeCJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImFwcCIsInBhZ2VzIiwic2VhcmNoIiwicHJvamVjdHMiLCJwb3N0cyIsImZvcm0iLCJmb3JtUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJkYXRhIiwiaWQiLCJfIiwibWFwS2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsNkRBQUFDLENBQWdCO0FBQ2xDQyxPQUFLLG9EQUQ2QjtBQUVsQ0MsU0FBTyxzREFGMkI7QUFHbENDLFVBQVEsdURBSDBCO0FBSWxDQyxZQUFVLHlEQUp3QjtBQUtsQ0MsU0FBTyxzREFMMkI7QUFNbENDLFFBQU0sa0RBQUFDO0FBTjRCLENBQWhCLENBQXBCOztBQVNBLCtEQUFlUixXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBOztBQUVBLCtEQUFlLFVBQVNTLFFBQVEsRUFBakIsRUFBc0JDLE1BQXRCLEVBQThCO0FBQ3pDLFlBQVFBLE9BQU9DLElBQWY7QUFDSSxhQUFLLG9EQUFMO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQU8sRUFBRSxDQUFDRCxPQUFPRSxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEVBQXJCLEdBQTBCSixPQUFPRSxPQUFQLENBQWVDLElBQTNDLEVBQWlESixLQUFqRCxFQUFQO0FBQ0osYUFBSyxvREFBTDtBQUNJO0FBQ0EsbUJBQU8sNkNBQUFNLENBQUVDLE9BQUYsQ0FBVU4sT0FBT0UsT0FBUCxDQUFlQyxJQUF6QixFQUErQixJQUEvQixDQUFQLENBWFIsQ0FXcUQ7QUFDakQ7QUFDSSxtQkFBT0osS0FBUDtBQWJSO0FBZUgsQyIsImZpbGUiOiJhcHAuM2FjMGFjNTI5OGJkNzZmNjI3NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG5pbXBvcnQgQXBwUmVkdWNlciBmcm9tICcuL2FwcF9yZWR1Y2VyJztcclxuaW1wb3J0IFNlYXJjaFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyX3NlYXJjaCc7XHJcbmltcG9ydCBQYWdlc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyX3BhZ2VzJztcclxuaW1wb3J0IFByb2plY3RzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJfcHJvamVjdHMnO1xyXG5pbXBvcnQgUG9zdHNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcl9wb3N0cyc7XHJcbi8vIGltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJztcclxuLy8gaW1wb3J0IFBvc3RzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJfcG9zdHMnXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXBwOiBBcHBSZWR1Y2VyLFxyXG4gIHBhZ2VzOiBQYWdlc1JlZHVjZXIsXHJcbiAgc2VhcmNoOiBTZWFyY2hSZWR1Y2VyLFxyXG4gIHByb2plY3RzOiBQcm9qZWN0c1JlZHVjZXIsXHJcbiAgcG9zdHM6IFBvc3RzUmVkdWNlcixcclxuICBmb3JtOiBmb3JtUmVkdWNlclxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBGRVRDSF9QT1NUUyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG4vLyBpbXBvcnQgcHJvamVjdHNfaW5kZXggZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0c19pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IFtdICwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QT1NUUzpcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cgKFwiZmV0Y2hpbmcuLjpcIiArIFthY3Rpb24ucGF5bG9hZC5kYXRhXS5wYXJhbXMpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICAgICAgLy8gLy8gY29uc3QgbmV3U3RhdGUgPSBbIC4uLnN0YXRlIF07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChcIlJlZHVjZXIgUG9zdDpcIiArIHBvc3QpO1xyXG4gICAgICAgICAgICAvLyBuZXdTdGF0ZVtwb3N0LmlkXSA9IHBvc3Q7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgW2FjdGlvbi5wYXlsb2FkLmRhdGEuaWRdOiBhY3Rpb24ucGF5bG9hZC5kYXRhLCBzdGF0ZSB9O1xyXG4gICAgICAgIGNhc2UgRkVUQ0hfUE9TVFM6XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkLmRhdGEpOyAvLyBleHBlY3QgYSBjb2xsZWN0aW9uIG9mIHBvc3RcclxuICAgICAgICAgICAgcmV0dXJuIF8ubWFwS2V5cyhhY3Rpb24ucGF5bG9hZC5kYXRhLCAnaWQnKTsgLy8gZW5hYmxlcyB1cyB0byBkbyBzaW1wbGUgSWQgbG9va3VwcyBvbiBzdGF0ZS5wb3N0IGluIGZ1dHVyZVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=