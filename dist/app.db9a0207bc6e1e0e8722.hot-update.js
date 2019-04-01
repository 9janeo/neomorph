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
/* harmony import */ var _containers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/post */ "./src/containers/post.jsx");
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
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: NeomorphSettings.path + 'posts', component: _components_posts__WEBPACK_IMPORTED_MODULE_5__["default"] }),
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

/***/ }),

/***/ "./src/components/posts.jsx":
/*!**********************************!*\
  !*** ./src/components/posts.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _loading_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading-icon.png */ "./src/loading-icon.png");
/* harmony import */ var _loading_icon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loading_icon_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _placeholder_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../placeholder.png */ "./src/placeholder.png");
/* harmony import */ var _placeholder_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_placeholder_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _containers_post_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/post-list */ "./src/containers/post-list.jsx");



// import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';






class Posts extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    //get all projects and display properly

    // [{Name: projects}].map((anObjectMapped, index) => {
    //     return (
    //         <p key={`${anObjectMapped.name}_{anObjectMapped.email}`}>
    //             {anObjectMapped.name} - {anObjectMapped.email}
    //         </p>
    //     );
    // })

    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.props.posts, post => {
      const postImage = post._embedded['wp:featuredmedia'][0].source_url;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        { className: 'card-outer grid-item', key: post.id },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          { className: 'card h-100' },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            { className: 'card-body' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h4',
              { className: 'card-title' },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                { to: NeomorphSettings.path + `posts?id=${post.id}` },
                post.title.rendered
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              { className: 'img-outer canvasThumb' },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                { to: NeomorphSettings.path + post.slug },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', { className: 'card-img-top', src: postImage, alt: 'Featured Image' })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'p',
              null,
              jQuery(post.excerpt.rendered).text()
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
              { to: NeomorphSettings.path + 'posts/' + posts.id },
              'Read more'
            )
          )
        )
      );
    });
  }

  render() {
    console.log("Render posts below:");
    console.log(this.props.posts);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'div',
      null,
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        { className: 'project-module' },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          { className: 'text-xs-right' },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
            { className: 'btn btn-primary', to: NeomorphSettings.path + 'posts/new' },
            'New Post'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'h1',
          { className: 'project-title' },
          'Recent Projects'
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          { className: 'posts-container grid-container' },
          this.renderPosts()
        )
      )
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, { fetchPosts: _actions__WEBPACK_IMPORTED_MODULE_4__["fetchPosts"] })(Posts));

// constructor(props) {
//   super(props);
//   this.getMorePosts = this.getMorePosts.bind(this);
//   this.state = {
//     posts: [],
//     page: 0,
//     getPosts: true,
//     controller: false
//   }
//   this.getMorePosts = this.getMorePosts.bind(this);
// }

// componentWillUnmount() {
//   this.getMorePosts = null;
// }

// componentDidMount() {
//   var that = this;
//   window.onbeforeunload = function () { window.scrollTo(0, 0); }

//   // init ScrollMagic Controller
//   that.state.controller = new ScrollMagic.Controller();

//   // build scene
//   var scene = new ScrollMagic.Scene({ triggerElement: "#colophon", triggerHook: "onEnter" })
//     .addTo(that.state.controller)
//     .on("enter", function (e) {
//       if (that.state.getPosts && that.getMorePosts !== null) {
//         that.getMorePosts();
//       }
//     });
// }

// getMorePosts() {
//   var that = this;
//   var totalPages;

//   // adding a loader
//   jQuery("#loader").addClass("active");

//   this.setState({ page: this.state.page + 1 });

//   fetch(NeomorphSettings.URL.api + "/posts/?page=" + this.state.page)
//     .then(function (response) {
//       for (var pair of response.headers.entries()) {

//         // getting the total number of pages
//         if (pair[0] == 'x-wp-totalpages') {
//           totalPages = pair[1];
//         }

//         if (that.state.page >= totalPages) {
//           that.setState({ getPosts: false })
//         }
//       }
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//   })
//   .then(function (results) {
//     var allPosts = that.state.posts.slice();
//     results.forEach(function (single) {
//       allPosts.push(single);
//     })
//     that.setState({ posts: allPosts });

//     // removing the loader
//     jQuery("#loader").removeClass("active");

//   }).catch(function (error) {
//     console.log('There has been a problem with your fetch operation: ' + error.message);
//     jQuery("#loader").remove();
//   });
// }

// componentDidUpdate() {
//   var FadeInController = new ScrollMagic.Controller();
//   jQuery('.posts-container .col-md-4.card-outer').each(function () {

//     // build a scene
//     var FadeInScene = new ScrollMagic.Scene({
//       triggerElement: this.children[0],
//       reverse: false,
//       triggerHook: 1
//     })
//       .setClassToggle(this, 'fade-in')
//       .addTo(FadeInController);
//   });
// }

// render() {
//   console.log(this.props.posts); 
//   if (this.state.posts.length == 0) {
//     return null;
//   }
//   // <img src={LoadingIcon} alt="loader gif" id="loader" />
//   return (
//     <div className="posts-module">      
//       <h2 className="posts-title">Recent Posts</h2>
//       <PostList posts={this.state.posts} />
//     </div>
//   );
// }

//   mapStateToProps(state) {
//     return {posts: state.posts};
//   }

// }

// export default connect(mapStateToProps, {fetchPosts}) (Posts);
// // Posts;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Bvc3RzLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJyZW5kZXIiLCJOZW9tb3JwaFNldHRpbmdzIiwicGF0aCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYXBwIiwiY29ubmVjdCIsIlBvc3RzIiwiY29tcG9uZW50RGlkTW91bnQiLCJwcm9wcyIsImZldGNoUG9zdHMiLCJyZW5kZXJQb3N0cyIsIl8iLCJtYXAiLCJwb3N0cyIsInBvc3QiLCJwb3N0SW1hZ2UiLCJfZW1iZWRkZWQiLCJzb3VyY2VfdXJsIiwiaWQiLCJ0aXRsZSIsInJlbmRlcmVkIiwic2x1ZyIsImpRdWVyeSIsImV4Y2VycHQiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE1BQU1BLEdBQU4sU0FBa0IsK0NBQWxCLENBQTRCO0FBQzFCQyxXQUFTO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUNFO0FBQUE7QUFBQSxRQUFLLElBQUcsWUFBUjtBQUNFLGlFQUFDLCtDQUFELE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFDLGlFQUFEO0FBQUE7QUFDRSxxRUFBQyxzREFBRCxJQUFPLE1BQU1DLGlCQUFpQkMsSUFBakIsR0FBd0IsY0FBckMsRUFBcUQsV0FBVyxxREFBaEUsR0FERjtBQUVFLHFFQUFDLHNEQUFELElBQU8sTUFBTUQsaUJBQWlCQyxJQUFqQixHQUF3QixhQUFyQyxFQUFvRCxXQUFXLHNEQUEvRCxHQUZGO0FBR0UscUVBQUMsc0RB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LEtBQXpCLEVBQWdDO0FBQzlCLFNBQU8sRUFBRVUsT0FBT1YsTUFBTVUsS0FBZixFQUFQO0FBQ0Q7O0FBRUQsK0RBQWUsMkRBQUFSLENBQVFILGVBQVIsRUFBeUIsRUFBRSwrREFBRixFQUF6QixFQUF5Q0ksS0FBekMsQ0FBZjs7QUFJRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUQ7QUFDQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFkiLCJmaWxlIjoiYXBwLmRiOWEwMjA3YmM2ZTFlMGU4NzIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgY3JlYXRlc3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXInO1xyXG5pbXBvcnQgUG9zdHMgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0cyc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbnRhaW5lcnMvcG9zdCc7XHJcbmltcG9ydCBQcm9qZWN0c0luZGV4IGZyb20gJy4vcHJvamVjdHNfaW5kZXgnO1xyXG5pbXBvcnQgUHJvamVjdHNOZXcgZnJvbSAnLi9wcm9qZWN0c19uZXcnO1xyXG5pbXBvcnQgUHJvamVjdHNTaG93IGZyb20gJy4vcHJvamVjdHNfc2hvdyc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZSc7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29udGFpbmVycy9zZWFyY2hfYmFyJztcclxuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuLi9jb250YWluZXJzL3NlYXJjaF9yZXN1bHQnO1xyXG5cclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL25vdC1mb3VuZCc7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi9sb2FkaW5nLWljb24ucG5nJztcclxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJy4uL3BsYWNlaG9sZGVyLnBuZyc7XHJcblxyXG4vLyBCdWlsdCB3aXRoIGhlbHAgdXNpbmcgdGhlIGZvbGxvd2luZyByZXNvdXJjc1xyXG4vLyBNdWhhbW1hZCBNdWhzaW4gLSBodHRwczovL3d3dy5zbWFzaGluZ21hZ2F6aW5lLmNvbS8yMDE4LzAzL3JlYWN0LXdvcmRwcmVzcy13ZWItYXBwL1xyXG4vLyBodHRwczovL3NuaXBjYXJ0LmNvbS9ibG9nL3JlYWN0anMtd29yZHByZXNzLXJlc3QtYXBpLWV4YW1wbGVcclxuXHJcbi8vIExvYWQgdGhlIFNhc3MgZmlsZVxyXG4vLyByZXF1aXJlKCcuL3N0eWxlLnNjc3MnKTtcclxuXHJcbi8vSW5pdGlhbGl6ZSBhcHAgc3RhdGUgaGVyZSwgd2l0aCBwYXRoIGFuZCBjdXN0b21lIHBvc3QgdHlwZXNcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnQXBwIHN0YXRlOicgKyB0aGlzLnN0YXRlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpO1xyXG4gICAgLy8gPFNlYXJjaEJhciAvPlxyXG4gICAgLy8gPFNlYXJjaFJlc3VsdCAvPlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cInBhZ2UtaW5uZXJcIj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxTd2l0Y2g+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncHJvamVjdHMvbmV3J30gY29tcG9uZW50PXtQcm9qZWN0c05ld30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwcm9qZWN0LzppZCd9IGNvbXBvbmVudD17UHJvamVjdHNTaG93fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Byb2plY3RzJ30gY29tcG9uZW50PXtQcm9qZWN0c0luZGV4fSAvPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwYWdlLzpzbHVnJ30gY29tcG9uZW50PXtQYWdlU2hvd30gLz4gICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgIHsvKiA8Um91dGUgZXhhY3QgcGF0aD17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJzpwYWdlJ30gY29tcG9uZW50PXtQYWdlfSAvPiAqL31cclxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCsgJ3Bvc3RzJ30gY29tcG9uZW50PXtQb3N0c30gLz4gey8qIC90aGUgcm9vdCBwYXRoICovfVxyXG4gICAgICAgICAgICB7LyogPFJvdXRlIGV4YWN0IHBhdGg9e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwb3N0cz9wb3N0X3R5cGU9cHJvamVjdHMnfSBjb21wb25lbnQ9e1Byb2plY3RzfSAvPiAqL31cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgYXBwOiBzdGF0ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXBwKTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vLyBpbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSAnc2Nyb2xsbWFnaWMvc2Nyb2xsbWFnaWMvdW5jb21wcmVzc2VkL1Njcm9sbE1hZ2ljJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZmV0Y2hQb3N0cyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vbG9hZGluZy1pY29uLnBuZyc7XHJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICcuLi9wbGFjZWhvbGRlci5wbmcnO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29udGFpbmVycy9wb3N0LWxpc3QnO1xyXG5cclxuY2xhc3MgUG9zdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZmV0Y2hQb3N0cygpO1xyXG59XHJcblxyXG5yZW5kZXJQb3N0cygpIHtcclxuICAgIC8vZ2V0IGFsbCBwcm9qZWN0cyBhbmQgZGlzcGxheSBwcm9wZXJseVxyXG5cclxuICAgIC8vIFt7TmFtZTogcHJvamVjdHN9XS5tYXAoKGFuT2JqZWN0TWFwcGVkLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgICAgIDxwIGtleT17YCR7YW5PYmplY3RNYXBwZWQubmFtZX1fe2FuT2JqZWN0TWFwcGVkLmVtYWlsfWB9PlxyXG4gICAgLy8gICAgICAgICAgICAge2FuT2JqZWN0TWFwcGVkLm5hbWV9IC0ge2FuT2JqZWN0TWFwcGVkLmVtYWlsfVxyXG4gICAgLy8gICAgICAgICA8L3A+XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH0pXHJcblxyXG4gICAgcmV0dXJuIF8ubWFwKHRoaXMucHJvcHMucG9zdHMsIHBvc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc3RJbWFnZSA9IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uc291cmNlX3VybFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtb3V0ZXIgZ3JpZC1pdGVtXCIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PExpbmsgdG89e05lb21vcnBoU2V0dGluZ3MucGF0aCArIGBwb3N0cz9pZD0ke3Bvc3QuaWR9YH0+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9MaW5rPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1vdXRlciBjYW52YXNUaHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyBwb3N0LnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17cG9zdEltYWdlfSBhbHQ9XCJGZWF0dXJlZCBJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57alF1ZXJ5KHBvc3QuZXhjZXJwdC5yZW5kZXJlZCkudGV4dCgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHMvJyArIHBvc3RzLmlkfT5SZWFkIG1vcmU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5yZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJlbmRlciBwb3N0cyBiZWxvdzpcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LW1vZHVsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwb3N0cy9uZXcnfT5OZXcgUG9zdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGVcIj5SZWNlbnQgUHJvamVjdHM8L2gxPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWNvbnRhaW5lciBncmlkLWNvbnRhaW5lclwiPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdHMoKX1cclxuICAgICAgICAgICAgICAgICAgICB7LyogPFByb2plY3RMaXN0IHByb2plY3RzPXt0aGlzLnByb3BzLnByb2plY3RzfSAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHsgcG9zdHM6IHN0YXRlLnBvc3RzIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoUG9zdHMgfSkoUG9zdHMpO1xyXG5cclxuXHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgLy8gICBzdXBlcihwcm9wcyk7XHJcbiAgLy8gICB0aGlzLmdldE1vcmVQb3N0cyA9IHRoaXMuZ2V0TW9yZVBvc3RzLmJpbmQodGhpcyk7XHJcbiAgLy8gICB0aGlzLnN0YXRlID0ge1xyXG4gIC8vICAgICBwb3N0czogW10sXHJcbiAgLy8gICAgIHBhZ2U6IDAsXHJcbiAgLy8gICAgIGdldFBvc3RzOiB0cnVlLFxyXG4gIC8vICAgICBjb250cm9sbGVyOiBmYWxzZVxyXG4gIC8vICAgfVxyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSB0aGlzLmdldE1vcmVQb3N0cy5iaW5kKHRoaXMpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgLy8gICB0aGlzLmdldE1vcmVQb3N0cyA9IG51bGw7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIHZhciB0aGF0ID0gdGhpcztcclxuICAvLyAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHsgd2luZG93LnNjcm9sbFRvKDAsIDApOyB9XHJcblxyXG4gIC8vICAgLy8gaW5pdCBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcbiAgLy8gICB0aGF0LnN0YXRlLmNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG5cclxuICAvLyAgIC8vIGJ1aWxkIHNjZW5lXHJcbiAgLy8gICB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoeyB0cmlnZ2VyRWxlbWVudDogXCIjY29sb3Bob25cIiwgdHJpZ2dlckhvb2s6IFwib25FbnRlclwiIH0pXHJcbiAgLy8gICAgIC5hZGRUbyh0aGF0LnN0YXRlLmNvbnRyb2xsZXIpXHJcbiAgLy8gICAgIC5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gICAgICAgaWYgKHRoYXQuc3RhdGUuZ2V0UG9zdHMgJiYgdGhhdC5nZXRNb3JlUG9zdHMgIT09IG51bGwpIHtcclxuICAvLyAgICAgICAgIHRoYXQuZ2V0TW9yZVBvc3RzKCk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcblxyXG5cdC8vIGdldE1vcmVQb3N0cygpIHtcclxuICAvLyAgIHZhciB0aGF0ID0gdGhpcztcclxuICAvLyAgIHZhciB0b3RhbFBhZ2VzO1xyXG5cclxuICAvLyAgIC8vIGFkZGluZyBhIGxvYWRlclxyXG4gIC8vICAgalF1ZXJ5KFwiI2xvYWRlclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgcGFnZTogdGhpcy5zdGF0ZS5wYWdlICsgMSB9KTtcclxuXHJcbiAgLy8gICBmZXRjaChOZW9tb3JwaFNldHRpbmdzLlVSTC5hcGkgKyBcIi9wb3N0cy8/cGFnZT1cIiArIHRoaXMuc3RhdGUucGFnZSlcclxuICAvLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgZm9yICh2YXIgcGFpciBvZiByZXNwb25zZS5oZWFkZXJzLmVudHJpZXMoKSkge1xyXG5cclxuICAvLyAgICAgICAgIC8vIGdldHRpbmcgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xyXG4gIC8vICAgICAgICAgaWYgKHBhaXJbMF0gPT0gJ3gtd3AtdG90YWxwYWdlcycpIHtcclxuICAvLyAgICAgICAgICAgdG90YWxQYWdlcyA9IHBhaXJbMV07XHJcbiAgLy8gICAgICAgICB9XHJcblxyXG4gIC8vICAgICAgICAgaWYgKHRoYXQuc3RhdGUucGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgLy8gICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyBnZXRQb3N0czogZmFsc2UgfSlcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gIC8vICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcclxuICAvLyAgICAgdmFyIGFsbFBvc3RzID0gdGhhdC5zdGF0ZS5wb3N0cy5zbGljZSgpO1xyXG4gIC8vICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHNpbmdsZSkge1xyXG4gIC8vICAgICAgIGFsbFBvc3RzLnB1c2goc2luZ2xlKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgdGhhdC5zZXRTdGF0ZSh7IHBvc3RzOiBhbGxQb3N0cyB9KTtcclxuXHJcbiAgLy8gICAgIC8vIHJlbW92aW5nIHRoZSBsb2FkZXJcclxuICAvLyAgICAgalF1ZXJ5KFwiI2xvYWRlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOiAnICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgIGpRdWVyeShcIiNsb2FkZXJcIikucmVtb3ZlKCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAvLyAgIHZhciBGYWRlSW5Db250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuICAvLyAgIGpRdWVyeSgnLnBvc3RzLWNvbnRhaW5lciAuY29sLW1kLTQuY2FyZC1vdXRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAvLyAgICAgLy8gYnVpbGQgYSBzY2VuZVxyXG4gIC8vICAgICB2YXIgRmFkZUluU2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG4gIC8vICAgICAgIHRyaWdnZXJFbGVtZW50OiB0aGlzLmNoaWxkcmVuWzBdLFxyXG4gIC8vICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gIC8vICAgICAgIHRyaWdnZXJIb29rOiAxXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgICAgLnNldENsYXNzVG9nZ2xlKHRoaXMsICdmYWRlLWluJylcclxuICAvLyAgICAgICAuYWRkVG8oRmFkZUluQ29udHJvbGxlcik7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHJlbmRlcigpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucG9zdHMpOyBcclxuICAvLyAgIGlmICh0aGlzLnN0YXRlLnBvc3RzLmxlbmd0aCA9PSAwKSB7XHJcbiAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLy8gPGltZyBzcmM9e0xvYWRpbmdJY29ufSBhbHQ9XCJsb2FkZXIgZ2lmXCIgaWQ9XCJsb2FkZXJcIiAvPlxyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1tb2R1bGVcIj4gICAgICBcclxuICAvLyAgICAgICA8aDIgY2xhc3NOYW1lPVwicG9zdHMtdGl0bGVcIj5SZWNlbnQgUG9zdHM8L2gyPlxyXG4gIC8vICAgICAgIDxQb3N0TGlzdCBwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c30gLz5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbi8vICAgbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbi8vICAgICByZXR1cm4ge3Bvc3RzOiBzdGF0ZS5wb3N0c307XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtmZXRjaFBvc3RzfSkgKFBvc3RzKTtcclxuLy8gLy8gUG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==