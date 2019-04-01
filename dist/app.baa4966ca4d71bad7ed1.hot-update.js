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
            // const postImage = post._embedded['wp:featuredmedia'][0].href        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0cy5qc3giXSwibmFtZXMiOlsiUG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiZmV0Y2hQb3N0cyIsInJlbmRlclBvc3RzIiwiXyIsIm1hcCIsInBvc3RzIiwicG9zdCIsImlkIiwiTmVvbW9ycGhTZXR0aW5ncyIsInBhdGgiLCJ0aXRsZSIsInJlbmRlcmVkIiwic2x1ZyIsInBvc3RJbWFnZSIsImpRdWVyeSIsImV4Y2VycHQiLCJ0ZXh0IiwicmVuZGVyIiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBTixTQUFvQiwrQ0FBcEIsQ0FBOEI7O0FBRTFCQyx3QkFBb0I7QUFDaEIsYUFBS0MsS0FBTCxDQUFXQyxVQUFYO0FBQ0g7O0FBRURDLGtCQUFjO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBTyw2Q0FBQUMsQ0FBRUMsR0FBRixDQUFNLEtBQUtKLEtBQUwsQ0FBV0ssS0FBakIsRUFBd0JDLFFBQVE7QUFDbkM7QUFDQSxtQkFDUTtBQUFBO0FBQUEsa0JBQUssV0FBVSxzQkFBZixFQUFzQyxLQUFLQSxLQUFLQyxFQUFoRDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQU9EO0FBQVAsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSSxXQUFVLFlBQWQ7QUFBMkI7QUFBQyxxRkFBRDtBQUFBLGtDQUFNLElBQUlFLGlCQUFpQkMsSUFBakIsR0FBeUIsWUFBV0gsS0FBS0MsRUFBRyxFQUF0RDtBQUEwREQscUNBQUtJLEtBQUwsQ0FBV0M7QUFBckU7QUFBM0IseUJBREo7QUFFSTtBQUFBO0FBQUEsOEJBQUssV0FBVSx1QkFBZjtBQUNJO0FBQUMscUZBQUQ7QUFBQSxrQ0FBTSxJQUFJSCxpQkFBaUJDLElBQWpCLEdBQXdCSCxLQUFLTSxJQUF2QztBQUNJLG9HQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLQyxTQUFuQyxFQUE4QyxLQUFJLGdCQUFsRDtBQURKO0FBREoseUJBRko7QUFPSTtBQUFBO0FBQUE7QUFBSUMsbUNBQU9SLEtBQUtTLE9BQUwsQ0FBYUosUUFBcEIsRUFBOEJLLElBQTlCO0FBQUoseUJBUEo7QUFRSTtBQUFDLGlGQUFEO0FBQUEsOEJBQU0sSUFBSVIsaUJBQWlCQyxJQUFqQixHQUF3QixRQUF4QixHQUFtQ0osTUFBTUUsRUFBbkQ7QUFBQTtBQUFBO0FBUko7QUFESjtBQUZKLGFBRFI7QUFpQkgsU0FuQk0sQ0FBUDtBQW9CSDs7QUFFRFUsYUFBUztBQUNMQyxnQkFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0FELGdCQUFRQyxHQUFSLENBQVksS0FBS25CLEtBQUwsQ0FBV0ssS0FBdkI7QUFDQSxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQyw2RUFBRDtBQUFBLDBCQUFNLFdBQVUsaUJBQWhCLEVBQWtDLElBQUlHLGlCQUFpQkMsSUFBakIsR0FBd0IsV0FBOUQ7QUFBQTtBQUFBO0FBREosaUJBREo7QUFJSTtBQUFBO0FBQUEsc0JBQUksV0FBVSxZQUFkO0FBQUE7QUFBQSxpQkFKSjtBQUtJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdDQUFmO0FBQ0sseUJBQUtQLFdBQUw7QUFETDtBQUxKO0FBREosU0FESjtBQWNIOztBQXhEeUI7O0FBNEQ5QixTQUFTa0IsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDNUIsV0FBTyxFQUFFaEIsT0FBT2dCLE1BQU1oQixLQUFmLEVBQVA7QUFDSDs7QUFFRCwrREFBZSwyREFBQWlCLENBQVFGLGVBQVIsRUFBeUIsRUFBRSwrREFBRixFQUF6QixFQUF5Q3RCLEtBQXpDLENBQWY7O0FBSUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVEO0FBQ0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZIiwiZmlsZSI6ImFwcC5iYWE0OTY2Y2E0ZDcxYmFkN2VkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuLy8gaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gJ3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9TY3JvbGxNYWdpYyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGZldGNoUG9zdHMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uL2xvYWRpbmctaWNvbi5wbmcnO1xyXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnLi4vcGxhY2Vob2xkZXIucG5nJztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbnRhaW5lcnMvcG9zdC1saXN0JztcclxuXHJcbmNsYXNzIFBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmZldGNoUG9zdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3N0cygpIHtcclxuICAgICAgICAvL2dldCBhbGwgcHJvamVjdHMgYW5kIGRpc3BsYXkgcHJvcGVybHlcclxuXHJcbiAgICAgICAgLy8gW3tOYW1lOiBwcm9qZWN0c31dLm1hcCgoYW5PYmplY3RNYXBwZWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgICAgICA8cCBrZXk9e2Ake2FuT2JqZWN0TWFwcGVkLm5hbWV9X3thbk9iamVjdE1hcHBlZC5lbWFpbH1gfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICB7YW5PYmplY3RNYXBwZWQubmFtZX0gLSB7YW5PYmplY3RNYXBwZWQuZW1haWx9XHJcbiAgICAgICAgLy8gICAgICAgICA8L3A+XHJcbiAgICAgICAgLy8gICAgICk7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIF8ubWFwKHRoaXMucHJvcHMucG9zdHMsIHBvc3QgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBwb3N0SW1hZ2UgPSBwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdLmhyZWYgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1vdXRlciBncmlkLWl0ZW1cIiBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7cG9zdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PExpbmsgdG89e05lb21vcnBoU2V0dGluZ3MucGF0aCArIGBwb3N0cz9pZD0ke3Bvc3QuaWR9YH0+e3Bvc3QudGl0bGUucmVuZGVyZWR9PC9MaW5rPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctb3V0ZXIgY2FudmFzVGh1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e05lb21vcnBoU2V0dGluZ3MucGF0aCArIHBvc3Quc2x1Z30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17cG9zdEltYWdlfSBhbHQ9XCJGZWF0dXJlZCBJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57alF1ZXJ5KHBvc3QuZXhjZXJwdC5yZW5kZXJlZCkudGV4dCgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Bvc3RzLycgKyBwb3N0cy5pZH0+UmVhZCBtb3JlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbmRlciBwb3N0cyBiZWxvdzpcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5wb3N0cyk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1tb2R1bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwb3N0cy9uZXcnfT5OZXcgUG9zdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlJlY2VudCBQb3N0czwvaDE+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWNvbnRhaW5lciBncmlkLWNvbnRhaW5lclwiPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBvc3RzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvamVjdExpc3QgcHJvamVjdHM9e3RoaXMucHJvcHMucHJvamVjdHN9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7ICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgICByZXR1cm4geyBwb3N0czogc3RhdGUucG9zdHMgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hQb3N0cyB9KShQb3N0cyk7XHJcblxyXG5cclxuXHJcbiAgLy8gY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAvLyAgIHN1cGVyKHByb3BzKTtcclxuICAvLyAgIHRoaXMuZ2V0TW9yZVBvc3RzID0gdGhpcy5nZXRNb3JlUG9zdHMuYmluZCh0aGlzKTtcclxuICAvLyAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgLy8gICAgIHBvc3RzOiBbXSxcclxuICAvLyAgICAgcGFnZTogMCxcclxuICAvLyAgICAgZ2V0UG9zdHM6IHRydWUsXHJcbiAgLy8gICAgIGNvbnRyb2xsZXI6IGZhbHNlXHJcbiAgLy8gICB9XHJcbiAgLy8gICB0aGlzLmdldE1vcmVQb3N0cyA9IHRoaXMuZ2V0TW9yZVBvc3RzLmJpbmQodGhpcyk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAvLyAgIHRoaXMuZ2V0TW9yZVBvc3RzID0gbnVsbDtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIC8vICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkgeyB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IH1cclxuXHJcbiAgLy8gICAvLyBpbml0IFNjcm9sbE1hZ2ljIENvbnRyb2xsZXJcclxuICAvLyAgIHRoYXQuc3RhdGUuY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcblxyXG4gIC8vICAgLy8gYnVpbGQgc2NlbmVcclxuICAvLyAgIHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7IHRyaWdnZXJFbGVtZW50OiBcIiNjb2xvcGhvblwiLCB0cmlnZ2VySG9vazogXCJvbkVudGVyXCIgfSlcclxuICAvLyAgICAgLmFkZFRvKHRoYXQuc3RhdGUuY29udHJvbGxlcilcclxuICAvLyAgICAgLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAvLyAgICAgICBpZiAodGhhdC5zdGF0ZS5nZXRQb3N0cyAmJiB0aGF0LmdldE1vcmVQb3N0cyAhPT0gbnVsbCkge1xyXG4gIC8vICAgICAgICAgdGhhdC5nZXRNb3JlUG9zdHMoKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuXHJcblx0Ly8gZ2V0TW9yZVBvc3RzKCkge1xyXG4gIC8vICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIC8vICAgdmFyIHRvdGFsUGFnZXM7XHJcblxyXG4gIC8vICAgLy8gYWRkaW5nIGEgbG9hZGVyXHJcbiAgLy8gICBqUXVlcnkoXCIjbG9hZGVyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiB0aGlzLnN0YXRlLnBhZ2UgKyAxIH0pO1xyXG5cclxuICAvLyAgIGZldGNoKE5lb21vcnBoU2V0dGluZ3MuVVJMLmFwaSArIFwiL3Bvc3RzLz9wYWdlPVwiICsgdGhpcy5zdGF0ZS5wYWdlKVxyXG4gIC8vICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAvLyAgICAgICBmb3IgKHZhciBwYWlyIG9mIHJlc3BvbnNlLmhlYWRlcnMuZW50cmllcygpKSB7XHJcblxyXG4gIC8vICAgICAgICAgLy8gZ2V0dGluZyB0aGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXHJcbiAgLy8gICAgICAgICBpZiAocGFpclswXSA9PSAneC13cC10b3RhbHBhZ2VzJykge1xyXG4gIC8vICAgICAgICAgICB0b3RhbFBhZ2VzID0gcGFpclsxXTtcclxuICAvLyAgICAgICAgIH1cclxuXHJcbiAgLy8gICAgICAgICBpZiAodGhhdC5zdGF0ZS5wYWdlID49IHRvdGFsUGFnZXMpIHtcclxuICAvLyAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7IGdldFBvc3RzOiBmYWxzZSB9KVxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgLy8gICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgIH0pXHJcbiAgLy8gICAudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xyXG4gIC8vICAgICB2YXIgYWxsUG9zdHMgPSB0aGF0LnN0YXRlLnBvc3RzLnNsaWNlKCk7XHJcbiAgLy8gICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAoc2luZ2xlKSB7XHJcbiAgLy8gICAgICAgYWxsUG9zdHMucHVzaChzaW5nbGUpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICB0aGF0LnNldFN0YXRlKHsgcG9zdHM6IGFsbFBvc3RzIH0pO1xyXG5cclxuICAvLyAgICAgLy8gcmVtb3ZpbmcgdGhlIGxvYWRlclxyXG4gIC8vICAgICBqUXVlcnkoXCIjbG9hZGVyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAvLyAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygnVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246ICcgKyBlcnJvci5tZXNzYWdlKTtcclxuICAvLyAgICAgalF1ZXJ5KFwiI2xvYWRlclwiKS5yZW1vdmUoKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gIC8vICAgdmFyIEZhZGVJbkNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG4gIC8vICAgalF1ZXJ5KCcucG9zdHMtY29udGFpbmVyIC5jb2wtbWQtNC5jYXJkLW91dGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gIC8vICAgICAvLyBidWlsZCBhIHNjZW5lXHJcbiAgLy8gICAgIHZhciBGYWRlSW5TY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcbiAgLy8gICAgICAgdHJpZ2dlckVsZW1lbnQ6IHRoaXMuY2hpbGRyZW5bMF0sXHJcbiAgLy8gICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgLy8gICAgICAgdHJpZ2dlckhvb2s6IDFcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgICAuc2V0Q2xhc3NUb2dnbGUodGhpcywgJ2ZhZGUtaW4nKVxyXG4gIC8vICAgICAgIC5hZGRUbyhGYWRlSW5Db250cm9sbGVyKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcmVuZGVyKCkge1xyXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5wb3N0cyk7IFxyXG4gIC8vICAgaWYgKHRoaXMuc3RhdGUucG9zdHMubGVuZ3RoID09IDApIHtcclxuICAvLyAgICAgcmV0dXJuIG51bGw7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAvLyA8aW1nIHNyYz17TG9hZGluZ0ljb259IGFsdD1cImxvYWRlciBnaWZcIiBpZD1cImxvYWRlclwiIC8+XHJcbiAgLy8gICByZXR1cm4gKFxyXG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLW1vZHVsZVwiPiAgICAgIFxyXG4gIC8vICAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3N0cy10aXRsZVwiPlJlY2VudCBQb3N0czwvaDI+XHJcbiAgLy8gICAgICAgPFBvc3RMaXN0IHBvc3RzPXt0aGlzLnN0YXRlLnBvc3RzfSAvPlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuLy8gICBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuLy8gICAgIHJldHVybiB7cG9zdHM6IHN0YXRlLnBvc3RzfTtcclxuLy8gICB9XHJcblxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge2ZldGNoUG9zdHN9KSAoUG9zdHMpO1xyXG4vLyAvLyBQb3N0czsiXSwic291cmNlUm9vdCI6IiJ9