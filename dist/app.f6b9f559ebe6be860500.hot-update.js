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
            const postImage = post._embedded['wp:featuredmedia'][0].href;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0cy5qc3giXSwibmFtZXMiOlsiUG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiZmV0Y2hQb3N0cyIsInJlbmRlclBvc3RzIiwiXyIsIm1hcCIsInBvc3RzIiwicG9zdCIsInBvc3RJbWFnZSIsIl9lbWJlZGRlZCIsImhyZWYiLCJpZCIsIk5lb21vcnBoU2V0dGluZ3MiLCJwYXRoIiwidGl0bGUiLCJyZW5kZXJlZCIsInNsdWciLCJqUXVlcnkiLCJleGNlcnB0IiwidGV4dCIsInJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQU4sU0FBb0IsK0NBQXBCLENBQThCOztBQUUxQkMsd0JBQW9CO0FBQ2hCLGFBQUtDLEtBQUwsQ0FBV0MsVUFBWDtBQUNIOztBQUVEQyxrQkFBYztBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQU8sNkNBQUFDLENBQUVDLEdBQUYsQ0FBTSxLQUFLSixLQUFMLENBQVdLLEtBQWpCLEVBQXdCQyxRQUFRO0FBQ25DLGtCQUFNQyxZQUFZRCxLQUFLRSxTQUFMLENBQWUsa0JBQWYsRUFBbUMsQ0FBbkMsRUFBc0NDLElBQXhEO0FBQ0EsbUJBQ1E7QUFBQTtBQUFBLGtCQUFLLFdBQVUsc0JBQWYsRUFBc0MsS0FBS0gsS0FBS0ksRUFBaEQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFPSjtBQUFQLGlCQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUksV0FBVSxZQUFkO0FBQTJCO0FBQUMscUZBQUQ7QUFBQSxrQ0FBTSxJQUFJSyxpQkFBaUJDLElBQWpCLEdBQXlCLFlBQVdOLEtBQUtJLEVBQUcsRUFBdEQ7QUFBMERKLHFDQUFLTyxLQUFMLENBQVdDO0FBQXJFO0FBQTNCLHlCQURKO0FBRUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsdUJBQWY7QUFDSTtBQUFDLHFGQUFEO0FBQUEsa0NBQU0sSUFBSUgsaUJBQWlCQyxJQUFqQixHQUF3Qk4sS0FBS1MsSUFBdkM7QUFDSSxvR0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS1IsU0FBbkMsRUFBOEMsS0FBSSxnQkFBbEQ7QUFESjtBQURKLHlCQUZKO0FBT0k7QUFBQTtBQUFBO0FBQUlTLG1DQUFPVixLQUFLVyxPQUFMLENBQWFILFFBQXBCLEVBQThCSSxJQUE5QjtBQUFKLHlCQVBKO0FBUUk7QUFBQyxpRkFBRDtBQUFBLDhCQUFNLElBQUlQLGlCQUFpQkMsSUFBakIsR0FBd0IsUUFBeEIsR0FBbUNQLE1BQU1LLEVBQW5EO0FBQUE7QUFBQTtBQVJKO0FBREo7QUFGSixhQURSO0FBaUJILFNBbkJNLENBQVA7QUFvQkg7O0FBRURTLGFBQVM7QUFDTEMsZ0JBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxnQkFBUUMsR0FBUixDQUFZLEtBQUtyQixLQUFMLENBQVdLLEtBQXZCO0FBQ0EsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxhQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUMsNkVBQUQ7QUFBQSwwQkFBTSxXQUFVLGlCQUFoQixFQUFrQyxJQUFJTSxpQkFBaUJDLElBQWpCLEdBQXdCLFdBQTlEO0FBQUE7QUFBQTtBQURKLGlCQURKO0FBSUk7QUFBQTtBQUFBLHNCQUFJLFdBQVUsWUFBZDtBQUFBO0FBQUEsaUJBSko7QUFLSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQ0FBZjtBQUNLLHlCQUFLVixXQUFMO0FBREw7QUFMSjtBQURKLFNBREo7QUFjSDs7QUF4RHlCOztBQTREOUIsU0FBU29CLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzVCLFdBQU8sRUFBRWxCLE9BQU9rQixNQUFNbEIsS0FBZixFQUFQO0FBQ0g7O0FBRUQsK0RBQWUsMkRBQUFtQixDQUFRRixlQUFSLEVBQXlCLEVBQUUsK0RBQUYsRUFBekIsRUFBeUN4QixLQUF6QyxDQUFmOztBQUlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRDtBQUNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWSIsImZpbGUiOiJhcHAuZjZiOWY1NTllYmU2YmU4NjA1MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbi8vIGltcG9ydCBTY3JvbGxNYWdpYyBmcm9tICdzY3JvbGxtYWdpYy9zY3JvbGxtYWdpYy91bmNvbXByZXNzZWQvU2Nyb2xsTWFnaWMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBmZXRjaFBvc3RzIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi9sb2FkaW5nLWljb24ucG5nJztcclxuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJy4uL3BsYWNlaG9sZGVyLnBuZyc7XHJcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuLi9jb250YWluZXJzL3Bvc3QtbGlzdCc7XHJcblxyXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFBvc3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9zdHMoKSB7XHJcbiAgICAgICAgLy9nZXQgYWxsIHByb2plY3RzIGFuZCBkaXNwbGF5IHByb3Blcmx5XHJcblxyXG4gICAgICAgIC8vIFt7TmFtZTogcHJvamVjdHN9XS5tYXAoKGFuT2JqZWN0TWFwcGVkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICAgICAgPHAga2V5PXtgJHthbk9iamVjdE1hcHBlZC5uYW1lfV97YW5PYmplY3RNYXBwZWQuZW1haWx9YH0+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAge2FuT2JqZWN0TWFwcGVkLm5hbWV9IC0ge2FuT2JqZWN0TWFwcGVkLmVtYWlsfVxyXG4gICAgICAgIC8vICAgICAgICAgPC9wPlxyXG4gICAgICAgIC8vICAgICApO1xyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBfLm1hcCh0aGlzLnByb3BzLnBvc3RzLCBwb3N0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zdEltYWdlID0gcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXVswXS5ocmVmICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtb3V0ZXIgZ3JpZC1pdGVtXCIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke3Bvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxMaW5rIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyBgcG9zdHM/aWQ9JHtwb3N0LmlkfWB9Pntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvTGluaz48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW91dGVyIGNhbnZhc1RodW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyBwb3N0LnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Bvc3RJbWFnZX0gYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2pRdWVyeShwb3N0LmV4Y2VycHQucmVuZGVyZWQpLnRleHQoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwb3N0cy8nICsgcG9zdHMuaWR9PlJlYWQgbW9yZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW5kZXIgcG9zdHMgYmVsb3c6XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucG9zdHMpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbW9kdWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHMvbmV3J30+TmV3IFBvc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5SZWNlbnQgUG9zdHM8L2gxPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXIgZ3JpZC1jb250YWluZXJcIj4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3N0cygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFByb2plY3RMaXN0IHByb2plY3RzPXt0aGlzLnByb3BzLnByb2plY3RzfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOyAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHsgcG9zdHM6IHN0YXRlLnBvc3RzIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoUG9zdHMgfSkoUG9zdHMpO1xyXG5cclxuXHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgLy8gICBzdXBlcihwcm9wcyk7XHJcbiAgLy8gICB0aGlzLmdldE1vcmVQb3N0cyA9IHRoaXMuZ2V0TW9yZVBvc3RzLmJpbmQodGhpcyk7XHJcbiAgLy8gICB0aGlzLnN0YXRlID0ge1xyXG4gIC8vICAgICBwb3N0czogW10sXHJcbiAgLy8gICAgIHBhZ2U6IDAsXHJcbiAgLy8gICAgIGdldFBvc3RzOiB0cnVlLFxyXG4gIC8vICAgICBjb250cm9sbGVyOiBmYWxzZVxyXG4gIC8vICAgfVxyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSB0aGlzLmdldE1vcmVQb3N0cy5iaW5kKHRoaXMpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgLy8gICB0aGlzLmdldE1vcmVQb3N0cyA9IG51bGw7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIHZhciB0aGF0ID0gdGhpcztcclxuICAvLyAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHsgd2luZG93LnNjcm9sbFRvKDAsIDApOyB9XHJcblxyXG4gIC8vICAgLy8gaW5pdCBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcbiAgLy8gICB0aGF0LnN0YXRlLmNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG5cclxuICAvLyAgIC8vIGJ1aWxkIHNjZW5lXHJcbiAgLy8gICB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoeyB0cmlnZ2VyRWxlbWVudDogXCIjY29sb3Bob25cIiwgdHJpZ2dlckhvb2s6IFwib25FbnRlclwiIH0pXHJcbiAgLy8gICAgIC5hZGRUbyh0aGF0LnN0YXRlLmNvbnRyb2xsZXIpXHJcbiAgLy8gICAgIC5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gICAgICAgaWYgKHRoYXQuc3RhdGUuZ2V0UG9zdHMgJiYgdGhhdC5nZXRNb3JlUG9zdHMgIT09IG51bGwpIHtcclxuICAvLyAgICAgICAgIHRoYXQuZ2V0TW9yZVBvc3RzKCk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcblxyXG5cdC8vIGdldE1vcmVQb3N0cygpIHtcclxuICAvLyAgIHZhciB0aGF0ID0gdGhpcztcclxuICAvLyAgIHZhciB0b3RhbFBhZ2VzO1xyXG5cclxuICAvLyAgIC8vIGFkZGluZyBhIGxvYWRlclxyXG4gIC8vICAgalF1ZXJ5KFwiI2xvYWRlclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgcGFnZTogdGhpcy5zdGF0ZS5wYWdlICsgMSB9KTtcclxuXHJcbiAgLy8gICBmZXRjaChOZW9tb3JwaFNldHRpbmdzLlVSTC5hcGkgKyBcIi9wb3N0cy8/cGFnZT1cIiArIHRoaXMuc3RhdGUucGFnZSlcclxuICAvLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgZm9yICh2YXIgcGFpciBvZiByZXNwb25zZS5oZWFkZXJzLmVudHJpZXMoKSkge1xyXG5cclxuICAvLyAgICAgICAgIC8vIGdldHRpbmcgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xyXG4gIC8vICAgICAgICAgaWYgKHBhaXJbMF0gPT0gJ3gtd3AtdG90YWxwYWdlcycpIHtcclxuICAvLyAgICAgICAgICAgdG90YWxQYWdlcyA9IHBhaXJbMV07XHJcbiAgLy8gICAgICAgICB9XHJcblxyXG4gIC8vICAgICAgICAgaWYgKHRoYXQuc3RhdGUucGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgLy8gICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyBnZXRQb3N0czogZmFsc2UgfSlcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gIC8vICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcclxuICAvLyAgICAgdmFyIGFsbFBvc3RzID0gdGhhdC5zdGF0ZS5wb3N0cy5zbGljZSgpO1xyXG4gIC8vICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHNpbmdsZSkge1xyXG4gIC8vICAgICAgIGFsbFBvc3RzLnB1c2goc2luZ2xlKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgdGhhdC5zZXRTdGF0ZSh7IHBvc3RzOiBhbGxQb3N0cyB9KTtcclxuXHJcbiAgLy8gICAgIC8vIHJlbW92aW5nIHRoZSBsb2FkZXJcclxuICAvLyAgICAgalF1ZXJ5KFwiI2xvYWRlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOiAnICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgIGpRdWVyeShcIiNsb2FkZXJcIikucmVtb3ZlKCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAvLyAgIHZhciBGYWRlSW5Db250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuICAvLyAgIGpRdWVyeSgnLnBvc3RzLWNvbnRhaW5lciAuY29sLW1kLTQuY2FyZC1vdXRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAvLyAgICAgLy8gYnVpbGQgYSBzY2VuZVxyXG4gIC8vICAgICB2YXIgRmFkZUluU2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG4gIC8vICAgICAgIHRyaWdnZXJFbGVtZW50OiB0aGlzLmNoaWxkcmVuWzBdLFxyXG4gIC8vICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gIC8vICAgICAgIHRyaWdnZXJIb29rOiAxXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgICAgLnNldENsYXNzVG9nZ2xlKHRoaXMsICdmYWRlLWluJylcclxuICAvLyAgICAgICAuYWRkVG8oRmFkZUluQ29udHJvbGxlcik7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHJlbmRlcigpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucG9zdHMpOyBcclxuICAvLyAgIGlmICh0aGlzLnN0YXRlLnBvc3RzLmxlbmd0aCA9PSAwKSB7XHJcbiAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLy8gPGltZyBzcmM9e0xvYWRpbmdJY29ufSBhbHQ9XCJsb2FkZXIgZ2lmXCIgaWQ9XCJsb2FkZXJcIiAvPlxyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1tb2R1bGVcIj4gICAgICBcclxuICAvLyAgICAgICA8aDIgY2xhc3NOYW1lPVwicG9zdHMtdGl0bGVcIj5SZWNlbnQgUG9zdHM8L2gyPlxyXG4gIC8vICAgICAgIDxQb3N0TGlzdCBwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c30gLz5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbi8vICAgbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbi8vICAgICByZXR1cm4ge3Bvc3RzOiBzdGF0ZS5wb3N0c307XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtmZXRjaFBvc3RzfSkgKFBvc3RzKTtcclxuLy8gLy8gUG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==