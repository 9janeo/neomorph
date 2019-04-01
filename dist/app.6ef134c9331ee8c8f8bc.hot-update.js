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
            return console.log(action.payload.data);
        // return _.mapKeys(action.payload.data, 'id'); // enables us to do simple Id lookups on state.post in future
        default:
            return state;
    }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcmVkdWNlcl9wb3N0cy5qc3giXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSwrREFBZSxVQUFTQSxRQUFRLEVBQWpCLEVBQXNCQyxNQUF0QixFQUE4QjtBQUN6QyxZQUFRQSxPQUFPQyxJQUFmO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUssb0RBQUw7QUFDSTtBQUNBLG1CQUFPQyxRQUFRQyxHQUFSLENBQVlILE9BQU9JLE9BQVAsQ0FBZUMsSUFBM0IsQ0FBUDtBQUNBO0FBQ0o7QUFDSSxtQkFBT04sS0FBUDtBQWRSO0FBZ0JILEMiLCJmaWxlIjoiYXBwLjZlZjEzNGM5MzMxZWU4YzhmOGJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBGRVRDSF9QT1NUUyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG4vLyBpbXBvcnQgcHJvamVjdHNfaW5kZXggZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0c19pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IFtdICwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgLy8gY2FzZSBGRVRDSF9QT1NUOlxyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyAoXCJmZXRjaGluZy4uOlwiICsgW2FjdGlvbi5wYXlsb2FkLmRhdGFdLnBhcmFtcyk7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnN0IHBvc3QgPSBhY3Rpb24ucGF5bG9hZC5kYXRhO1xyXG4gICAgICAgIC8vICAgICAvLyAvLyBjb25zdCBuZXdTdGF0ZSA9IFsgLi4uc3RhdGUgXTtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cgKFwiUmVkdWNlciBQb3N0OlwiICsgcG9zdCk7XHJcbiAgICAgICAgLy8gICAgIC8vIG5ld1N0YXRlW3Bvc3QuaWRdID0gcG9zdDtcclxuICAgICAgICAvLyAgICAgLy8gcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4geyBbYWN0aW9uLnBheWxvYWQuZGF0YS5pZF06IGFjdGlvbi5wYXlsb2FkLmRhdGEsIHN0YXRlIH07XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QT1NUUzpcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQuZGF0YSk7IC8vIGV4cGVjdCBhIGNvbGxlY3Rpb24gb2YgcG9zdFxyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBfLm1hcEtleXMoYWN0aW9uLnBheWxvYWQuZGF0YSwgJ2lkJyk7IC8vIGVuYWJsZXMgdXMgdG8gZG8gc2ltcGxlIElkIGxvb2t1cHMgb24gc3RhdGUucG9zdCBpbiBmdXR1cmVcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9