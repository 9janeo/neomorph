webpackHotUpdate("app",{

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
        // case FETCH_POST:
        //     // console.log ("fetching..:" + [action.payload.data].params);
        //     // const post = action.payload.data;
        //     // // const newState = [ ...state ];
        //     // console.log ("Reducer Post:" + post);
        //     // newState[post.id] = post;
        //     // return newState;
        //     return { [action.payload.data.id]: action.payload.data, state };
        case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS"]:
            // console.log(action.payload.data); // expect a collection of post
            return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapKeys(action.payload.data, 'id'); // enables us to do simple Id lookups on state.post in future
        default:
            return state;
    }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcmVkdWNlcl9wb3N0cy5qc3giXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiXyIsIm1hcEtleXMiLCJwYXlsb2FkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsVUFBU0EsUUFBUSxFQUFqQixFQUFzQkMsTUFBdEIsRUFBOEI7QUFDekMsWUFBUUEsT0FBT0MsSUFBZjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLLG9EQUFMO0FBQ0k7QUFDQSxtQkFBTyw2Q0FBQUMsQ0FBRUMsT0FBRixDQUFVSCxPQUFPSSxPQUFQLENBQWVDLElBQXpCLEVBQStCLElBQS9CLENBQVAsQ0FYUixDQVdxRDtBQUNqRDtBQUNJLG1CQUFPTixLQUFQO0FBYlI7QUFlSCxDIiwiZmlsZSI6ImFwcC4zNjMwNDY4NjM4ZTQ2NDMyNjk5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRkVUQ0hfUE9TVFMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuLy8gaW1wb3J0IHByb2plY3RzX2luZGV4IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHNfaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBbXSAsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIC8vIGNhc2UgRkVUQ0hfUE9TVDpcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cgKFwiZmV0Y2hpbmcuLjpcIiArIFthY3Rpb24ucGF5bG9hZC5kYXRhXS5wYXJhbXMpO1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zdCBwb3N0ID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgICAvLyAgICAgLy8gLy8gY29uc3QgbmV3U3RhdGUgPSBbIC4uLnN0YXRlIF07XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nIChcIlJlZHVjZXIgUG9zdDpcIiArIHBvc3QpO1xyXG4gICAgICAgIC8vICAgICAvLyBuZXdTdGF0ZVtwb3N0LmlkXSA9IHBvc3Q7XHJcbiAgICAgICAgLy8gICAgIC8vIHJldHVybiBuZXdTdGF0ZTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHsgW2FjdGlvbi5wYXlsb2FkLmRhdGEuaWRdOiBhY3Rpb24ucGF5bG9hZC5kYXRhLCBzdGF0ZSB9O1xyXG4gICAgICAgIGNhc2UgRkVUQ0hfUE9TVFM6XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkLmRhdGEpOyAvLyBleHBlY3QgYSBjb2xsZWN0aW9uIG9mIHBvc3RcclxuICAgICAgICAgICAgcmV0dXJuIF8ubWFwS2V5cyhhY3Rpb24ucGF5bG9hZC5kYXRhLCAnaWQnKTsgLy8gZW5hYmxlcyB1cyB0byBkbyBzaW1wbGUgSWQgbG9va3VwcyBvbiBzdGF0ZS5wb3N0IGluIGZ1dHVyZVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=