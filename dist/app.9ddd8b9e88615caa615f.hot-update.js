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
            console.log(post._embedded);
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
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', { className: 'card-img-top', src: post.featured_image_src ? post.featured_image_src : _placeholder_png__WEBPACK_IMPORTED_MODULE_6___default.a, alt: 'Featured Image' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0cy5qc3giXSwibmFtZXMiOlsiUG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiZmV0Y2hQb3N0cyIsInJlbmRlclBvc3RzIiwiXyIsIm1hcCIsInBvc3RzIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJfZW1iZWRkZWQiLCJpZCIsIk5lb21vcnBoU2V0dGluZ3MiLCJwYXRoIiwidGl0bGUiLCJyZW5kZXJlZCIsInNsdWciLCJmZWF0dXJlZF9pbWFnZV9zcmMiLCJqUXVlcnkiLCJleGNlcnB0IiwidGV4dCIsInJlbmRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBTixTQUFvQiwrQ0FBcEIsQ0FBOEI7O0FBRTFCQyx3QkFBb0I7QUFDaEIsYUFBS0MsS0FBTCxDQUFXQyxVQUFYO0FBQ0g7O0FBRURDLGtCQUFjO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBTyw2Q0FBQUMsQ0FBRUMsR0FBRixDQUFNLEtBQUtKLEtBQUwsQ0FBV0ssS0FBakIsRUFBd0JDLFFBQVE7QUFDbkM7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWUYsS0FBS0csU0FBakI7QUFDQSxtQkFDUTtBQUFBO0FBQUEsa0JBQUssV0FBVSxzQkFBZixFQUFzQyxLQUFLSCxLQUFLSSxFQUFoRDtBQUVJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFJLFdBQVUsWUFBZDtBQUEyQjtBQUFDLHFGQUFEO0FBQUEsa0NBQU0sSUFBSUMsaUJBQWlCQyxJQUFqQixHQUF5QixZQUFXTixLQUFLSSxFQUFHLEVBQXREO0FBQTBESixxQ0FBS08sS0FBTCxDQUFXQztBQUFyRTtBQUEzQix5QkFESjtBQUVJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQyxxRkFBRDtBQUFBLGtDQUFNLElBQUlILGlCQUFpQkMsSUFBakIsR0FBd0JOLEtBQUtTLElBQXZDO0FBR1Esb0dBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtULEtBQUtVLGtCQUFMLEdBQTBCVixLQUFLVSxrQkFBL0IsR0FBb0QsdURBQXZGLEVBQW9HLEtBQUksZ0JBQXhHO0FBSFI7QUFESix5QkFGSjtBQVNJO0FBQUE7QUFBQTtBQUFJQyxtQ0FBT1gsS0FBS1ksT0FBTCxDQUFhSixRQUFwQixFQUE4QkssSUFBOUI7QUFBSjtBQVRKO0FBREo7QUFGSixhQURSO0FBbUJILFNBdEJNLENBQVA7QUF1Qkg7O0FBRURDLGFBQVM7QUFDTGIsZ0JBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxnQkFBUUMsR0FBUixDQUFZLEtBQUtSLEtBQUwsQ0FBV0ssS0FBdkI7QUFDQSxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQyw2RUFBRDtBQUFBLDBCQUFNLFdBQVUsaUJBQWhCLEVBQWtDLElBQUlNLGlCQUFpQkMsSUFBakIsR0FBd0IsV0FBOUQ7QUFBQTtBQUFBO0FBREosaUJBREo7QUFJSTtBQUFBO0FBQUEsc0JBQUksV0FBVSxZQUFkO0FBQUE7QUFBQSxpQkFKSjtBQUtJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdDQUFmO0FBQ0sseUJBQUtWLFdBQUw7QUFETDtBQUxKO0FBREosU0FESjtBQWNIOztBQTNEeUI7O0FBK0Q5QixTQUFTbUIsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDNUIsV0FBTyxFQUFFakIsT0FBT2lCLE1BQU1qQixLQUFmLEVBQVA7QUFDSDs7QUFFRCwrREFBZSwyREFBQWtCLENBQVFGLGVBQVIsRUFBeUIsRUFBRSwrREFBRixFQUF6QixFQUF5Q3ZCLEtBQXpDLENBQWY7O0FBSUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVEO0FBQ0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxZIiwiZmlsZSI6ImFwcC45ZGRkOGI5ZTg4NjE1Y2FhNjE1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuLy8gaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gJ3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9TY3JvbGxNYWdpYyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGZldGNoUG9zdHMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uL2xvYWRpbmctaWNvbi5wbmcnO1xyXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnLi4vcGxhY2Vob2xkZXIucG5nJztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL2NvbnRhaW5lcnMvcG9zdC1saXN0JztcclxuXHJcbmNsYXNzIFBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmZldGNoUG9zdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3N0cygpIHtcclxuICAgICAgICAvL2dldCBhbGwgcHJvamVjdHMgYW5kIGRpc3BsYXkgcHJvcGVybHlcclxuXHJcbiAgICAgICAgLy8gW3tOYW1lOiBwcm9qZWN0c31dLm1hcCgoYW5PYmplY3RNYXBwZWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgICAgICA8cCBrZXk9e2Ake2FuT2JqZWN0TWFwcGVkLm5hbWV9X3thbk9iamVjdE1hcHBlZC5lbWFpbH1gfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICB7YW5PYmplY3RNYXBwZWQubmFtZX0gLSB7YW5PYmplY3RNYXBwZWQuZW1haWx9XHJcbiAgICAgICAgLy8gICAgICAgICA8L3A+XHJcbiAgICAgICAgLy8gICAgICk7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIF8ubWFwKHRoaXMucHJvcHMucG9zdHMsIHBvc3QgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBwb3N0SW1hZ2UgPSBwb3N0Ll9lbWJlZGRlZFsnd3A6ZmVhdHVyZWRtZWRpYSddWzBdLmhyZWZcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdC5fZW1iZWRkZWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW91dGVyIGdyaWQtaXRlbVwiIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48TGluayB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgYHBvc3RzP2lkPSR7cG9zdC5pZH1gfT57cG9zdC50aXRsZS5yZW5kZXJlZH08L0xpbms+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1vdXRlciBjYW52YXNUaHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgcG9zdC5zbHVnfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Bvc3RJbWFnZX0gYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17cG9zdC5mZWF0dXJlZF9pbWFnZV9zcmMgPyBwb3N0LmZlYXR1cmVkX2ltYWdlX3NyYyA6IFBsYWNlaG9sZGVyfSBhbHQ9XCJGZWF0dXJlZCBJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57alF1ZXJ5KHBvc3QuZXhjZXJwdC5yZW5kZXJlZCkudGV4dCgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgdG89e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwb3N0cy8nICsgcG9zdHMuaWR9PlJlYWQgbW9yZTwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyIHBvc3RzIGJlbG93OlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LW1vZHVsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Bvc3RzL25ldyd9Pk5ldyBQb3N0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+UmVjZW50IFBvc3RzPC9oMT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyIGdyaWQtY29udGFpbmVyXCI+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9qZWN0TGlzdCBwcm9qZWN0cz17dGhpcy5wcm9wcy5wcm9qZWN0c30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICAgIHJldHVybiB7IHBvc3RzOiBzdGF0ZS5wb3N0cyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaFBvc3RzIH0pKFBvc3RzKTtcclxuXHJcblxyXG5cclxuICAvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gIC8vICAgc3VwZXIocHJvcHMpO1xyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSB0aGlzLmdldE1vcmVQb3N0cy5iaW5kKHRoaXMpO1xyXG4gIC8vICAgdGhpcy5zdGF0ZSA9IHtcclxuICAvLyAgICAgcG9zdHM6IFtdLFxyXG4gIC8vICAgICBwYWdlOiAwLFxyXG4gIC8vICAgICBnZXRQb3N0czogdHJ1ZSxcclxuICAvLyAgICAgY29udHJvbGxlcjogZmFsc2VcclxuICAvLyAgIH1cclxuICAvLyAgIHRoaXMuZ2V0TW9yZVBvc3RzID0gdGhpcy5nZXRNb3JlUG9zdHMuYmluZCh0aGlzKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSBudWxsO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgLy8gICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgfVxyXG5cclxuICAvLyAgIC8vIGluaXQgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclxyXG4gIC8vICAgdGhhdC5zdGF0ZS5jb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHJcbiAgLy8gICAvLyBidWlsZCBzY2VuZVxyXG4gIC8vICAgdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHsgdHJpZ2dlckVsZW1lbnQ6IFwiI2NvbG9waG9uXCIsIHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIiB9KVxyXG4gIC8vICAgICAuYWRkVG8odGhhdC5zdGF0ZS5jb250cm9sbGVyKVxyXG4gIC8vICAgICAub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgICAgIGlmICh0aGF0LnN0YXRlLmdldFBvc3RzICYmIHRoYXQuZ2V0TW9yZVBvc3RzICE9PSBudWxsKSB7XHJcbiAgLy8gICAgICAgICB0aGF0LmdldE1vcmVQb3N0cygpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuXHQvLyBnZXRNb3JlUG9zdHMoKSB7XHJcbiAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgLy8gICB2YXIgdG90YWxQYWdlcztcclxuXHJcbiAgLy8gICAvLyBhZGRpbmcgYSBsb2FkZXJcclxuICAvLyAgIGpRdWVyeShcIiNsb2FkZXJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDEgfSk7XHJcblxyXG4gIC8vICAgZmV0Y2goTmVvbW9ycGhTZXR0aW5ncy5VUkwuYXBpICsgXCIvcG9zdHMvP3BhZ2U9XCIgKyB0aGlzLnN0YXRlLnBhZ2UpXHJcbiAgLy8gICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gIC8vICAgICAgIGZvciAodmFyIHBhaXIgb2YgcmVzcG9uc2UuaGVhZGVycy5lbnRyaWVzKCkpIHtcclxuXHJcbiAgLy8gICAgICAgICAvLyBnZXR0aW5nIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcclxuICAvLyAgICAgICAgIGlmIChwYWlyWzBdID09ICd4LXdwLXRvdGFscGFnZXMnKSB7XHJcbiAgLy8gICAgICAgICAgIHRvdGFsUGFnZXMgPSBwYWlyWzFdO1xyXG4gIC8vICAgICAgICAgfVxyXG5cclxuICAvLyAgICAgICAgIGlmICh0aGF0LnN0YXRlLnBhZ2UgPj0gdG90YWxQYWdlcykge1xyXG4gIC8vICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgZ2V0UG9zdHM6IGZhbHNlIH0pXHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAvLyAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgfSlcclxuICAvLyAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgLy8gICAgIHZhciBhbGxQb3N0cyA9IHRoYXQuc3RhdGUucG9zdHMuc2xpY2UoKTtcclxuICAvLyAgICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChzaW5nbGUpIHtcclxuICAvLyAgICAgICBhbGxQb3N0cy5wdXNoKHNpbmdsZSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIHRoYXQuc2V0U3RhdGUoeyBwb3N0czogYWxsUG9zdHMgfSk7XHJcblxyXG4gIC8vICAgICAvLyByZW1vdmluZyB0aGUgbG9hZGVyXHJcbiAgLy8gICAgIGpRdWVyeShcIiNsb2FkZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gIC8vICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW0gd2l0aCB5b3VyIGZldGNoIG9wZXJhdGlvbjogJyArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICBqUXVlcnkoXCIjbG9hZGVyXCIpLnJlbW92ZSgpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgLy8gICB2YXIgRmFkZUluQ29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcbiAgLy8gICBqUXVlcnkoJy5wb3N0cy1jb250YWluZXIgLmNvbC1tZC00LmNhcmQtb3V0ZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gICAgIC8vIGJ1aWxkIGEgc2NlbmVcclxuICAvLyAgICAgdmFyIEZhZGVJblNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuICAvLyAgICAgICB0cmlnZ2VyRWxlbWVudDogdGhpcy5jaGlsZHJlblswXSxcclxuICAvLyAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAvLyAgICAgICB0cmlnZ2VySG9vazogMVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAgIC5zZXRDbGFzc1RvZ2dsZSh0aGlzLCAnZmFkZS1pbicpXHJcbiAgLy8gICAgICAgLmFkZFRvKEZhZGVJbkNvbnRyb2xsZXIpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyByZW5kZXIoKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTsgXHJcbiAgLy8gICBpZiAodGhpcy5zdGF0ZS5wb3N0cy5sZW5ndGggPT0gMCkge1xyXG4gIC8vICAgICByZXR1cm4gbnVsbDtcclxuICAvLyAgIH1cclxuICAvLyAgIC8vIDxpbWcgc3JjPXtMb2FkaW5nSWNvbn0gYWx0PVwibG9hZGVyIGdpZlwiIGlkPVwibG9hZGVyXCIgLz5cclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtbW9kdWxlXCI+ICAgICAgXHJcbiAgLy8gICAgICAgPGgyIGNsYXNzTmFtZT1cInBvc3RzLXRpdGxlXCI+UmVjZW50IFBvc3RzPC9oMj5cclxuICAvLyAgICAgICA8UG9zdExpc3QgcG9zdHM9e3RoaXMuc3RhdGUucG9zdHN9IC8+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4vLyAgIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4vLyAgICAgcmV0dXJuIHtwb3N0czogc3RhdGUucG9zdHN9O1xyXG4vLyAgIH1cclxuXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7ZmV0Y2hQb3N0c30pIChQb3N0cyk7XHJcbi8vIC8vIFBvc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=