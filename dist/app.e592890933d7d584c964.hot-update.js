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

        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.props.posts, post => {
            console.log(post._embedded);
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                { className: 'card-outer grid-item', key: post.id },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'div',
                    { className: 'card h-100' },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        'div',
                        { className: 'img-outer' },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                            { to: 'post/?slug=' + post.slug },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', { className: 'card-img-top', src: post.featured_image_src ? post.featured_image_src : _placeholder_png__WEBPACK_IMPORTED_MODULE_6___default.a, alt: 'Featured Image' })
                        )
                    ),
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
                            'h4',
                            { className: 'card-author' },
                            'Post made by: ',
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                                { to: post._links.author[0].href },
                                post.author_name
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            'p',
                            { className: 'card-text' },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                'small',
                                { className: 'text-muted' },
                                post.author_name,
                                ' \u2013 ',
                                post.published_date
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            'p',
                            null,
                            jQuery(post.excerpt.rendered).text()
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
                { className: 'post-module' },
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
                    { className: 'page-title' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0cy5qc3giXSwibmFtZXMiOlsiUG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiZmV0Y2hQb3N0cyIsInJlbmRlclBvc3RzIiwiXyIsIm1hcCIsInBvc3RzIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJfZW1iZWRkZWQiLCJpZCIsInNsdWciLCJmZWF0dXJlZF9pbWFnZV9zcmMiLCJOZW9tb3JwaFNldHRpbmdzIiwicGF0aCIsInRpdGxlIiwicmVuZGVyZWQiLCJfbGlua3MiLCJhdXRob3IiLCJocmVmIiwiYXV0aG9yX25hbWUiLCJwdWJsaXNoZWRfZGF0ZSIsImpRdWVyeSIsImV4Y2VycHQiLCJ0ZXh0IiwicmVuZGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CLCtDQUFwQixDQUE4Qjs7QUFFMUJDLHdCQUFvQjtBQUNoQixhQUFLQyxLQUFMLENBQVdDLFVBQVg7QUFDSDs7QUFFREMsa0JBQWM7QUFDVjs7QUFFQSxlQUFPLDZDQUFBQyxDQUFFQyxHQUFGLENBQU0sS0FBS0osS0FBTCxDQUFXSyxLQUFqQixFQUF3QkMsUUFBUTtBQUNuQ0Msb0JBQVFDLEdBQVIsQ0FBWUYsS0FBS0csU0FBakI7QUFDQSxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxzQkFBZixFQUFzQyxLQUFLSCxLQUFLSSxFQUFoRDtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQyxpRkFBRDtBQUFBLDhCQUFNLElBQUksZ0JBQWdCSixLQUFLSyxJQUEvQjtBQUNJLGdHQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLTCxLQUFLTSxrQkFBTCxHQUEwQk4sS0FBS00sa0JBQS9CLEdBQW9ELHVEQUF2RixFQUFvRyxLQUFJLGdCQUF4RztBQURKO0FBREoscUJBREo7QUFNSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFJLFdBQVUsWUFBZDtBQUEyQjtBQUFDLHFGQUFEO0FBQUEsa0NBQU0sSUFBSUMsaUJBQWlCQyxJQUFqQixHQUF5QixZQUFXUixLQUFLSSxFQUFHLEVBQXREO0FBQTBESixxQ0FBS1MsS0FBTCxDQUFXQztBQUFyRTtBQUEzQix5QkFESjtBQUVJO0FBQUE7QUFBQSw4QkFBSSxXQUFVLGFBQWQ7QUFBQTtBQUEwQztBQUFDLHFGQUFEO0FBQUEsa0NBQU0sSUFBSVYsS0FBS1csTUFBTCxDQUFZQyxNQUFaLENBQW1CLENBQW5CLEVBQXNCQyxJQUFoQztBQUF1Q2IscUNBQUtjO0FBQTVDO0FBQTFDLHlCQUZKO0FBR0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsV0FBYjtBQUF5QjtBQUFBO0FBQUEsa0NBQU8sV0FBVSxZQUFqQjtBQUErQmQscUNBQUtjLFdBQXBDO0FBQUE7QUFBMERkLHFDQUFLZTtBQUEvRDtBQUF6Qix5QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFJQyxtQ0FBT2hCLEtBQUtpQixPQUFMLENBQWFQLFFBQXBCLEVBQThCUSxJQUE5QjtBQUFKO0FBSko7QUFOSjtBQURKLGFBREo7QUFpQkgsU0FuQk0sQ0FBUDtBQW9CSDs7QUFFREMsYUFBUztBQUNMbEIsZ0JBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxnQkFBUUMsR0FBUixDQUFZLEtBQUtSLEtBQUwsQ0FBV0ssS0FBdkI7QUFDQSxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQyw2RUFBRDtBQUFBLDBCQUFNLFdBQVUsaUJBQWhCLEVBQWtDLElBQUlRLGlCQUFpQkMsSUFBakIsR0FBd0IsV0FBOUQ7QUFBQTtBQUFBO0FBREosaUJBREo7QUFJSTtBQUFBO0FBQUEsc0JBQUksV0FBVSxZQUFkO0FBQUE7QUFBQSxpQkFKSjtBQUtJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdDQUFmO0FBQ0sseUJBQUtaLFdBQUw7QUFETDtBQUxKO0FBREosU0FESjtBQWFIOztBQS9DeUI7O0FBbUQ5QixTQUFTd0IsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDNUIsV0FBTyxFQUFFdEIsT0FBT3NCLE1BQU10QixLQUFmLEVBQVA7QUFDSDs7QUFFRCwrREFBZSwyREFBQXVCLENBQVFGLGVBQVIsRUFBeUIsRUFBRSwrREFBRixFQUF6QixFQUF5QzVCLEtBQXpDLENBQWY7O0FBSUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVEO0FBQ0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZIiwiZmlsZSI6ImFwcC5lNTkyODkwOTMzZDdkNTg0Yzk2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuLy8gaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gJ3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9TY3JvbGxNYWdpYyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGZldGNoUG9zdHMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uL2xvYWRpbmctaWNvbi5wbmcnO1xyXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnLi4vcGxhY2Vob2xkZXIucG5nJztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbnRhaW5lcnMvcG9zdC1saXN0JztcclxuXHJcbmNsYXNzIFBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmZldGNoUG9zdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3N0cygpIHtcclxuICAgICAgICAvL2dldCBhbGwgcHJvamVjdHMgYW5kIGRpc3BsYXkgcHJvcGVybHlcclxuXHJcbiAgICAgICAgcmV0dXJuIF8ubWFwKHRoaXMucHJvcHMucG9zdHMsIHBvc3QgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0Ll9lbWJlZGRlZCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1vdXRlciBncmlkLWl0ZW1cIiBrZXk9e3Bvc3QuaWR9PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW91dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17J3Bvc3QvP3NsdWc9JyArIHBvc3Quc2x1Z30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Bvc3QuZmVhdHVyZWRfaW1hZ2Vfc3JjID8gcG9zdC5mZWF0dXJlZF9pbWFnZV9zcmMgOiBQbGFjZWhvbGRlcn0gYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PExpbmsgdG89e05lb21vcnBoU2V0dGluZ3MucGF0aCArIGBwb3N0cz9pZD0ke3Bvc3QuaWR9YH0+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9MaW5rPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC1hdXRob3JcIj5Qb3N0IG1hZGUgYnk6IDxMaW5rIHRvPXtwb3N0Ll9saW5rcy5hdXRob3JbMF0uaHJlZn0+e3Bvc3QuYXV0aG9yX25hbWV9PC9MaW5rPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntwb3N0LmF1dGhvcl9uYW1lfSAmbmRhc2g7IHtwb3N0LnB1Ymxpc2hlZF9kYXRlfTwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2pRdWVyeShwb3N0LmV4Y2VycHQucmVuZGVyZWQpLnRleHQoKX08L3A+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyIHBvc3RzIGJlbG93OlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LW1vZHVsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Bvc3RzL25ldyd9Pk5ldyBQb3N0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+UmVjZW50IFBvc3RzPC9oMT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyIGdyaWQtY29udGFpbmVyXCI+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdHMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOyAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHsgcG9zdHM6IHN0YXRlLnBvc3RzIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoUG9zdHMgfSkoUG9zdHMpO1xyXG5cclxuXHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgLy8gICBzdXBlcihwcm9wcyk7XHJcbiAgLy8gICB0aGlzLmdldE1vcmVQb3N0cyA9IHRoaXMuZ2V0TW9yZVBvc3RzLmJpbmQodGhpcyk7XHJcbiAgLy8gICB0aGlzLnN0YXRlID0ge1xyXG4gIC8vICAgICBwb3N0czogW10sXHJcbiAgLy8gICAgIHBhZ2U6IDAsXHJcbiAgLy8gICAgIGdldFBvc3RzOiB0cnVlLFxyXG4gIC8vICAgICBjb250cm9sbGVyOiBmYWxzZVxyXG4gIC8vICAgfVxyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSB0aGlzLmdldE1vcmVQb3N0cy5iaW5kKHRoaXMpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgLy8gICB0aGlzLmdldE1vcmVQb3N0cyA9IG51bGw7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIHZhciB0aGF0ID0gdGhpcztcclxuICAvLyAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHsgd2luZG93LnNjcm9sbFRvKDAsIDApOyB9XHJcblxyXG4gIC8vICAgLy8gaW5pdCBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcbiAgLy8gICB0aGF0LnN0YXRlLmNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG5cclxuICAvLyAgIC8vIGJ1aWxkIHNjZW5lXHJcbiAgLy8gICB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoeyB0cmlnZ2VyRWxlbWVudDogXCIjY29sb3Bob25cIiwgdHJpZ2dlckhvb2s6IFwib25FbnRlclwiIH0pXHJcbiAgLy8gICAgIC5hZGRUbyh0aGF0LnN0YXRlLmNvbnRyb2xsZXIpXHJcbiAgLy8gICAgIC5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gICAgICAgaWYgKHRoYXQuc3RhdGUuZ2V0UG9zdHMgJiYgdGhhdC5nZXRNb3JlUG9zdHMgIT09IG51bGwpIHtcclxuICAvLyAgICAgICAgIHRoYXQuZ2V0TW9yZVBvc3RzKCk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcblxyXG5cdC8vIGdldE1vcmVQb3N0cygpIHtcclxuICAvLyAgIHZhciB0aGF0ID0gdGhpcztcclxuICAvLyAgIHZhciB0b3RhbFBhZ2VzO1xyXG5cclxuICAvLyAgIC8vIGFkZGluZyBhIGxvYWRlclxyXG4gIC8vICAgalF1ZXJ5KFwiI2xvYWRlclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgcGFnZTogdGhpcy5zdGF0ZS5wYWdlICsgMSB9KTtcclxuXHJcbiAgLy8gICBmZXRjaChOZW9tb3JwaFNldHRpbmdzLlVSTC5hcGkgKyBcIi9wb3N0cy8/cGFnZT1cIiArIHRoaXMuc3RhdGUucGFnZSlcclxuICAvLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgZm9yICh2YXIgcGFpciBvZiByZXNwb25zZS5oZWFkZXJzLmVudHJpZXMoKSkge1xyXG5cclxuICAvLyAgICAgICAgIC8vIGdldHRpbmcgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xyXG4gIC8vICAgICAgICAgaWYgKHBhaXJbMF0gPT0gJ3gtd3AtdG90YWxwYWdlcycpIHtcclxuICAvLyAgICAgICAgICAgdG90YWxQYWdlcyA9IHBhaXJbMV07XHJcbiAgLy8gICAgICAgICB9XHJcblxyXG4gIC8vICAgICAgICAgaWYgKHRoYXQuc3RhdGUucGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgLy8gICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyBnZXRQb3N0czogZmFsc2UgfSlcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gIC8vICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcclxuICAvLyAgICAgdmFyIGFsbFBvc3RzID0gdGhhdC5zdGF0ZS5wb3N0cy5zbGljZSgpO1xyXG4gIC8vICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHNpbmdsZSkge1xyXG4gIC8vICAgICAgIGFsbFBvc3RzLnB1c2goc2luZ2xlKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgdGhhdC5zZXRTdGF0ZSh7IHBvc3RzOiBhbGxQb3N0cyB9KTtcclxuXHJcbiAgLy8gICAgIC8vIHJlbW92aW5nIHRoZSBsb2FkZXJcclxuICAvLyAgICAgalF1ZXJ5KFwiI2xvYWRlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOiAnICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgIGpRdWVyeShcIiNsb2FkZXJcIikucmVtb3ZlKCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAvLyAgIHZhciBGYWRlSW5Db250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuICAvLyAgIGpRdWVyeSgnLnBvc3RzLWNvbnRhaW5lciAuY29sLW1kLTQuY2FyZC1vdXRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAvLyAgICAgLy8gYnVpbGQgYSBzY2VuZVxyXG4gIC8vICAgICB2YXIgRmFkZUluU2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG4gIC8vICAgICAgIHRyaWdnZXJFbGVtZW50OiB0aGlzLmNoaWxkcmVuWzBdLFxyXG4gIC8vICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gIC8vICAgICAgIHRyaWdnZXJIb29rOiAxXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgICAgLnNldENsYXNzVG9nZ2xlKHRoaXMsICdmYWRlLWluJylcclxuICAvLyAgICAgICAuYWRkVG8oRmFkZUluQ29udHJvbGxlcik7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHJlbmRlcigpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucG9zdHMpOyBcclxuICAvLyAgIGlmICh0aGlzLnN0YXRlLnBvc3RzLmxlbmd0aCA9PSAwKSB7XHJcbiAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLy8gPGltZyBzcmM9e0xvYWRpbmdJY29ufSBhbHQ9XCJsb2FkZXIgZ2lmXCIgaWQ9XCJsb2FkZXJcIiAvPlxyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1tb2R1bGVcIj4gICAgICBcclxuICAvLyAgICAgICA8aDIgY2xhc3NOYW1lPVwicG9zdHMtdGl0bGVcIj5SZWNlbnQgUG9zdHM8L2gyPlxyXG4gIC8vICAgICAgIDxQb3N0TGlzdCBwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c30gLz5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbi8vICAgbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbi8vICAgICByZXR1cm4ge3Bvc3RzOiBzdGF0ZS5wb3N0c307XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtmZXRjaFBvc3RzfSkgKFBvc3RzKTtcclxuLy8gLy8gUG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==