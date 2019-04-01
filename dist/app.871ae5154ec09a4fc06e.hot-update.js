webpackHotUpdate("app",{

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
          null,
          '$',
          post
        ),
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
          'Recent Posts'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0cy5qc3giXSwibmFtZXMiOlsiUG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiZmV0Y2hQb3N0cyIsInJlbmRlclBvc3RzIiwiXyIsIm1hcCIsInBvc3RzIiwicG9zdCIsInBvc3RJbWFnZSIsIl9lbWJlZGRlZCIsInNvdXJjZV91cmwiLCJpZCIsIk5lb21vcnBoU2V0dGluZ3MiLCJwYXRoIiwidGl0bGUiLCJyZW5kZXJlZCIsInNsdWciLCJqUXVlcnkiLCJleGNlcnB0IiwidGV4dCIsInJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQU4sU0FBb0IsK0NBQXBCLENBQThCOztBQUU1QkMsc0JBQW9CO0FBQ2xCLFNBQUtDLEtBQUwsQ0FBV0MsVUFBWDtBQUNIOztBQUVEQyxnQkFBYztBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQU8sNkNBQUFDLENBQUVDLEdBQUYsQ0FBTSxLQUFLSixLQUFMLENBQVdLLEtBQWpCLEVBQXdCQyxRQUFRO0FBQ25DLFlBQU1DLFlBQVlELEtBQUtFLFNBQUwsQ0FBZSxrQkFBZixFQUFtQyxDQUFuQyxFQUFzQ0MsVUFBeEQ7QUFDQSxhQUNRO0FBQUE7QUFBQSxVQUFLLFdBQVUsc0JBQWYsRUFBc0MsS0FBS0gsS0FBS0ksRUFBaEQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFPSjtBQUFQLFNBREo7QUFFSTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxZQUFkO0FBQTJCO0FBQUMscUVBQUQ7QUFBQSxrQkFBTSxJQUFJSyxpQkFBaUJDLElBQWpCLEdBQXlCLFlBQVdOLEtBQUtJLEVBQUcsRUFBdEQ7QUFBMERKLHFCQUFLTyxLQUFMLENBQVdDO0FBQXJFO0FBQTNCLGFBREo7QUFFSTtBQUFBO0FBQUEsZ0JBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUMscUVBQUQ7QUFBQSxrQkFBTSxJQUFJSCxpQkFBaUJDLElBQWpCLEdBQXdCTixLQUFLUyxJQUF2QztBQUNJLG9GQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLUixTQUFuQyxFQUE4QyxLQUFJLGdCQUFsRDtBQURKO0FBREosYUFGSjtBQU9JO0FBQUE7QUFBQTtBQUFJUyxxQkFBT1YsS0FBS1csT0FBTCxDQUFhSCxRQUFwQixFQUE4QkksSUFBOUI7QUFBSixhQVBKO0FBUUk7QUFBQyxtRUFBRDtBQUFBLGdCQUFNLElBQUlQLGlCQUFpQkMsSUFBakIsR0FBd0IsUUFBeEIsR0FBbUNQLE1BQU1LLEVBQW5EO0FBQUE7QUFBQTtBQVJKO0FBREo7QUFGSixPQURSO0FBaUJILEtBbkJNLENBQVA7QUFvQkg7O0FBRURTLFdBQVM7QUFDTEMsWUFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0FELFlBQVFDLEdBQVIsQ0FBWSxLQUFLckIsS0FBTCxDQUFXSyxLQUF2QjtBQUNBLFdBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSxZQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUMsaUVBQUQ7QUFBQSxjQUFNLFdBQVUsaUJBQWhCLEVBQWtDLElBQUlNLGlCQUFpQkMsSUFBakIsR0FBd0IsV0FBOUQ7QUFBQTtBQUFBO0FBREosU0FESjtBQUlJO0FBQUE7QUFBQSxZQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsU0FKSjtBQUtJO0FBQUE7QUFBQSxZQUFLLFdBQVUsZ0NBQWY7QUFDSyxlQUFLVixXQUFMO0FBREw7QUFMSjtBQURKLEtBREo7QUFjSDtBQXhENkI7O0FBMkQ5QixTQUFTb0IsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUIsU0FBTyxFQUFFbEIsT0FBT2tCLE1BQU1sQixLQUFmLEVBQVA7QUFDRDs7QUFFRCwrREFBZSwyREFBQW1CLENBQVFGLGVBQVIsRUFBeUIsRUFBRSwrREFBRixFQUF6QixFQUF5Q3hCLEtBQXpDLENBQWY7O0FBSUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVEO0FBQ0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZIiwiZmlsZSI6ImFwcC44NzFhZTUxNTRlYzA5YTRmYzA2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuLy8gaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gJ3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9TY3JvbGxNYWdpYyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGZldGNoUG9zdHMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uL2xvYWRpbmctaWNvbi5wbmcnO1xyXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnLi4vcGxhY2Vob2xkZXIucG5nJztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbnRhaW5lcnMvcG9zdC1saXN0JztcclxuXHJcbmNsYXNzIFBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmZldGNoUG9zdHMoKTtcclxufVxyXG5cclxucmVuZGVyUG9zdHMoKSB7XHJcbiAgICAvL2dldCBhbGwgcHJvamVjdHMgYW5kIGRpc3BsYXkgcHJvcGVybHlcclxuXHJcbiAgICAvLyBbe05hbWU6IHByb2plY3RzfV0ubWFwKChhbk9iamVjdE1hcHBlZCwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgICA8cCBrZXk9e2Ake2FuT2JqZWN0TWFwcGVkLm5hbWV9X3thbk9iamVjdE1hcHBlZC5lbWFpbH1gfT5cclxuICAgIC8vICAgICAgICAgICAgIHthbk9iamVjdE1hcHBlZC5uYW1lfSAtIHthbk9iamVjdE1hcHBlZC5lbWFpbH1cclxuICAgIC8vICAgICAgICAgPC9wPlxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHJldHVybiBfLm1hcCh0aGlzLnByb3BzLnBvc3RzLCBwb3N0ID0+IHtcclxuICAgICAgICBjb25zdCBwb3N0SW1hZ2UgPSBwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdLnNvdXJjZV91cmxcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW91dGVyIGdyaWQtaXRlbVwiIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4ke3Bvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxMaW5rIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyBgcG9zdHM/aWQ9JHtwb3N0LmlkfWB9Pntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvTGluaz48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctb3V0ZXIgY2FudmFzVGh1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgcG9zdC5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Bvc3RJbWFnZX0gYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2pRdWVyeShwb3N0LmV4Y2VycHQucmVuZGVyZWQpLnRleHQoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Bvc3RzLycgKyBwb3N0cy5pZH0+UmVhZCBtb3JlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxufVxyXG5cclxucmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJSZW5kZXIgcG9zdHMgYmVsb3c6XCIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5wb3N0cyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1tb2R1bGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHMvbmV3J30+TmV3IFBvc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwcm9qZWN0LXRpdGxlXCI+UmVjZW50IFBvc3RzPC9oMT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXIgZ3JpZC1jb250YWluZXJcIj4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBvc3RzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9qZWN0TGlzdCBwcm9qZWN0cz17dGhpcy5wcm9wcy5wcm9qZWN0c30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gIHJldHVybiB7IHBvc3RzOiBzdGF0ZS5wb3N0cyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaFBvc3RzIH0pKFBvc3RzKTtcclxuXHJcblxyXG5cclxuICAvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gIC8vICAgc3VwZXIocHJvcHMpO1xyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSB0aGlzLmdldE1vcmVQb3N0cy5iaW5kKHRoaXMpO1xyXG4gIC8vICAgdGhpcy5zdGF0ZSA9IHtcclxuICAvLyAgICAgcG9zdHM6IFtdLFxyXG4gIC8vICAgICBwYWdlOiAwLFxyXG4gIC8vICAgICBnZXRQb3N0czogdHJ1ZSxcclxuICAvLyAgICAgY29udHJvbGxlcjogZmFsc2VcclxuICAvLyAgIH1cclxuICAvLyAgIHRoaXMuZ2V0TW9yZVBvc3RzID0gdGhpcy5nZXRNb3JlUG9zdHMuYmluZCh0aGlzKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSBudWxsO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgLy8gICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgfVxyXG5cclxuICAvLyAgIC8vIGluaXQgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclxyXG4gIC8vICAgdGhhdC5zdGF0ZS5jb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHJcbiAgLy8gICAvLyBidWlsZCBzY2VuZVxyXG4gIC8vICAgdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHsgdHJpZ2dlckVsZW1lbnQ6IFwiI2NvbG9waG9uXCIsIHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIiB9KVxyXG4gIC8vICAgICAuYWRkVG8odGhhdC5zdGF0ZS5jb250cm9sbGVyKVxyXG4gIC8vICAgICAub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgICAgIGlmICh0aGF0LnN0YXRlLmdldFBvc3RzICYmIHRoYXQuZ2V0TW9yZVBvc3RzICE9PSBudWxsKSB7XHJcbiAgLy8gICAgICAgICB0aGF0LmdldE1vcmVQb3N0cygpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuXHQvLyBnZXRNb3JlUG9zdHMoKSB7XHJcbiAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgLy8gICB2YXIgdG90YWxQYWdlcztcclxuXHJcbiAgLy8gICAvLyBhZGRpbmcgYSBsb2FkZXJcclxuICAvLyAgIGpRdWVyeShcIiNsb2FkZXJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDEgfSk7XHJcblxyXG4gIC8vICAgZmV0Y2goTmVvbW9ycGhTZXR0aW5ncy5VUkwuYXBpICsgXCIvcG9zdHMvP3BhZ2U9XCIgKyB0aGlzLnN0YXRlLnBhZ2UpXHJcbiAgLy8gICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gIC8vICAgICAgIGZvciAodmFyIHBhaXIgb2YgcmVzcG9uc2UuaGVhZGVycy5lbnRyaWVzKCkpIHtcclxuXHJcbiAgLy8gICAgICAgICAvLyBnZXR0aW5nIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcclxuICAvLyAgICAgICAgIGlmIChwYWlyWzBdID09ICd4LXdwLXRvdGFscGFnZXMnKSB7XHJcbiAgLy8gICAgICAgICAgIHRvdGFsUGFnZXMgPSBwYWlyWzFdO1xyXG4gIC8vICAgICAgICAgfVxyXG5cclxuICAvLyAgICAgICAgIGlmICh0aGF0LnN0YXRlLnBhZ2UgPj0gdG90YWxQYWdlcykge1xyXG4gIC8vICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgZ2V0UG9zdHM6IGZhbHNlIH0pXHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAvLyAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgfSlcclxuICAvLyAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgLy8gICAgIHZhciBhbGxQb3N0cyA9IHRoYXQuc3RhdGUucG9zdHMuc2xpY2UoKTtcclxuICAvLyAgICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChzaW5nbGUpIHtcclxuICAvLyAgICAgICBhbGxQb3N0cy5wdXNoKHNpbmdsZSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIHRoYXQuc2V0U3RhdGUoeyBwb3N0czogYWxsUG9zdHMgfSk7XHJcblxyXG4gIC8vICAgICAvLyByZW1vdmluZyB0aGUgbG9hZGVyXHJcbiAgLy8gICAgIGpRdWVyeShcIiNsb2FkZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gIC8vICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW0gd2l0aCB5b3VyIGZldGNoIG9wZXJhdGlvbjogJyArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICBqUXVlcnkoXCIjbG9hZGVyXCIpLnJlbW92ZSgpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgLy8gICB2YXIgRmFkZUluQ29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcbiAgLy8gICBqUXVlcnkoJy5wb3N0cy1jb250YWluZXIgLmNvbC1tZC00LmNhcmQtb3V0ZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gICAgIC8vIGJ1aWxkIGEgc2NlbmVcclxuICAvLyAgICAgdmFyIEZhZGVJblNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuICAvLyAgICAgICB0cmlnZ2VyRWxlbWVudDogdGhpcy5jaGlsZHJlblswXSxcclxuICAvLyAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAvLyAgICAgICB0cmlnZ2VySG9vazogMVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAgIC5zZXRDbGFzc1RvZ2dsZSh0aGlzLCAnZmFkZS1pbicpXHJcbiAgLy8gICAgICAgLmFkZFRvKEZhZGVJbkNvbnRyb2xsZXIpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyByZW5kZXIoKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTsgXHJcbiAgLy8gICBpZiAodGhpcy5zdGF0ZS5wb3N0cy5sZW5ndGggPT0gMCkge1xyXG4gIC8vICAgICByZXR1cm4gbnVsbDtcclxuICAvLyAgIH1cclxuICAvLyAgIC8vIDxpbWcgc3JjPXtMb2FkaW5nSWNvbn0gYWx0PVwibG9hZGVyIGdpZlwiIGlkPVwibG9hZGVyXCIgLz5cclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtbW9kdWxlXCI+ICAgICAgXHJcbiAgLy8gICAgICAgPGgyIGNsYXNzTmFtZT1cInBvc3RzLXRpdGxlXCI+UmVjZW50IFBvc3RzPC9oMj5cclxuICAvLyAgICAgICA8UG9zdExpc3QgcG9zdHM9e3RoaXMuc3RhdGUucG9zdHN9IC8+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4vLyAgIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4vLyAgICAgcmV0dXJuIHtwb3N0czogc3RhdGUucG9zdHN9O1xyXG4vLyAgIH1cclxuXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7ZmV0Y2hQb3N0c30pIChQb3N0cyk7XHJcbi8vIC8vIFBvc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=