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
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: NeomorphSettings.path + post.slug })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0cy5qc3giXSwibmFtZXMiOlsiUG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiZmV0Y2hQb3N0cyIsInJlbmRlclBvc3RzIiwiXyIsIm1hcCIsInBvc3RzIiwicG9zdCIsImlkIiwiTmVvbW9ycGhTZXR0aW5ncyIsInBhdGgiLCJ0aXRsZSIsInJlbmRlcmVkIiwic2x1ZyIsImpRdWVyeSIsImV4Y2VycHQiLCJ0ZXh0IiwicmVuZGVyIiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBTixTQUFvQiwrQ0FBcEIsQ0FBOEI7O0FBRTFCQyx3QkFBb0I7QUFDaEIsYUFBS0MsS0FBTCxDQUFXQyxVQUFYO0FBQ0g7O0FBRURDLGtCQUFjO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBTyw2Q0FBQUMsQ0FBRUMsR0FBRixDQUFNLEtBQUtKLEtBQUwsQ0FBV0ssS0FBakIsRUFBd0JDLFFBQVE7QUFDbkM7QUFDQSxtQkFDUTtBQUFBO0FBQUEsa0JBQUssV0FBVSxzQkFBZixFQUFzQyxLQUFLQSxLQUFLQyxFQUFoRDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQU9EO0FBQVAsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSSxXQUFVLFlBQWQ7QUFBMkI7QUFBQyxxRkFBRDtBQUFBLGtDQUFNLElBQUlFLGlCQUFpQkMsSUFBakIsR0FBeUIsWUFBV0gsS0FBS0MsRUFBRyxFQUF0RDtBQUEwREQscUNBQUtJLEtBQUwsQ0FBV0M7QUFBckU7QUFBM0IseUJBREo7QUFFSTtBQUFBO0FBQUEsOEJBQUssV0FBVSx1QkFBZjtBQUNJLHVGQUFDLHFEQUFELElBQU0sSUFBSUgsaUJBQWlCQyxJQUFqQixHQUF3QkgsS0FBS00sSUFBdkM7QUFESix5QkFGSjtBQU9JO0FBQUE7QUFBQTtBQUFJQyxtQ0FBT1AsS0FBS1EsT0FBTCxDQUFhSCxRQUFwQixFQUE4QkksSUFBOUI7QUFBSix5QkFQSjtBQVFJO0FBQUMsaUZBQUQ7QUFBQSw4QkFBTSxJQUFJUCxpQkFBaUJDLElBQWpCLEdBQXdCLFFBQXhCLEdBQW1DSixNQUFNRSxFQUFuRDtBQUFBO0FBQUE7QUFSSjtBQURKO0FBRkosYUFEUjtBQWlCSCxTQW5CTSxDQUFQO0FBb0JIOztBQUVEUyxhQUFTO0FBQ0xDLGdCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQUQsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLbEIsS0FBTCxDQUFXSyxLQUF2QjtBQUNBLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsYUFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGVBQWY7QUFDSTtBQUFDLDZFQUFEO0FBQUEsMEJBQU0sV0FBVSxpQkFBaEIsRUFBa0MsSUFBSUcsaUJBQWlCQyxJQUFqQixHQUF3QixXQUE5RDtBQUFBO0FBQUE7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBSSxXQUFVLFlBQWQ7QUFBQTtBQUFBLGlCQUpKO0FBS0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0NBQWY7QUFDSyx5QkFBS1AsV0FBTDtBQURMO0FBTEo7QUFESixTQURKO0FBY0g7O0FBeER5Qjs7QUE0RDlCLFNBQVNpQixlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM1QixXQUFPLEVBQUVmLE9BQU9lLE1BQU1mLEtBQWYsRUFBUDtBQUNIOztBQUVELCtEQUFlLDJEQUFBZ0IsQ0FBUUYsZUFBUixFQUF5QixFQUFFLCtEQUFGLEVBQXpCLEVBQXlDckIsS0FBekMsQ0FBZjs7QUFJRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUQ7QUFDQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFkiLCJmaWxlIjoiYXBwLjg1ZTQ2YmFjYzkwYjQ4NDI1ZDViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vLyBpbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSAnc2Nyb2xsbWFnaWMvc2Nyb2xsbWFnaWMvdW5jb21wcmVzc2VkL1Njcm9sbE1hZ2ljJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZmV0Y2hQb3N0cyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vbG9hZGluZy1pY29uLnBuZyc7XHJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICcuLi9wbGFjZWhvbGRlci5wbmcnO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29udGFpbmVycy9wb3N0LWxpc3QnO1xyXG5cclxuY2xhc3MgUG9zdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hQb3N0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvc3RzKCkge1xyXG4gICAgICAgIC8vZ2V0IGFsbCBwcm9qZWN0cyBhbmQgZGlzcGxheSBwcm9wZXJseVxyXG5cclxuICAgICAgICAvLyBbe05hbWU6IHByb2plY3RzfV0ubWFwKChhbk9iamVjdE1hcHBlZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIChcclxuICAgICAgICAvLyAgICAgICAgIDxwIGtleT17YCR7YW5PYmplY3RNYXBwZWQubmFtZX1fe2FuT2JqZWN0TWFwcGVkLmVtYWlsfWB9PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHthbk9iamVjdE1hcHBlZC5uYW1lfSAtIHthbk9iamVjdE1hcHBlZC5lbWFpbH1cclxuICAgICAgICAvLyAgICAgICAgIDwvcD5cclxuICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICByZXR1cm4gXy5tYXAodGhpcy5wcm9wcy5wb3N0cywgcG9zdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbWFnZSA9IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uaHJlZiAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW91dGVyIGdyaWQtaXRlbVwiIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtwb3N0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48TGluayB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgYHBvc3RzP2lkPSR7cG9zdC5pZH1gfT57cG9zdC50aXRsZS5yZW5kZXJlZH08L0xpbms+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1vdXRlciBjYW52YXNUaHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgcG9zdC5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17cG9zdEltYWdlfSBhbHQ9XCJGZWF0dXJlZCBJbWFnZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2pRdWVyeShwb3N0LmV4Y2VycHQucmVuZGVyZWQpLnRleHQoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e05lb21vcnBoU2V0dGluZ3MucGF0aCArICdwb3N0cy8nICsgcG9zdHMuaWR9PlJlYWQgbW9yZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW5kZXIgcG9zdHMgYmVsb3c6XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucG9zdHMpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbW9kdWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHMvbmV3J30+TmV3IFBvc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5SZWNlbnQgUG9zdHM8L2gxPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXIgZ3JpZC1jb250YWluZXJcIj4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3N0cygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFByb2plY3RMaXN0IHByb2plY3RzPXt0aGlzLnByb3BzLnByb2plY3RzfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOyAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHsgcG9zdHM6IHN0YXRlLnBvc3RzIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoUG9zdHMgfSkoUG9zdHMpO1xyXG5cclxuXHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgLy8gICBzdXBlcihwcm9wcyk7XHJcbiAgLy8gICB0aGlzLmdldE1vcmVQb3N0cyA9IHRoaXMuZ2V0TW9yZVBvc3RzLmJpbmQodGhpcyk7XHJcbiAgLy8gICB0aGlzLnN0YXRlID0ge1xyXG4gIC8vICAgICBwb3N0czogW10sXHJcbiAgLy8gICAgIHBhZ2U6IDAsXHJcbiAgLy8gICAgIGdldFBvc3RzOiB0cnVlLFxyXG4gIC8vICAgICBjb250cm9sbGVyOiBmYWxzZVxyXG4gIC8vICAgfVxyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSB0aGlzLmdldE1vcmVQb3N0cy5iaW5kKHRoaXMpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgLy8gICB0aGlzLmdldE1vcmVQb3N0cyA9IG51bGw7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIHZhciB0aGF0ID0gdGhpcztcclxuICAvLyAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHsgd2luZG93LnNjcm9sbFRvKDAsIDApOyB9XHJcblxyXG4gIC8vICAgLy8gaW5pdCBTY3JvbGxNYWdpYyBDb250cm9sbGVyXHJcbiAgLy8gICB0aGF0LnN0YXRlLmNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG5cclxuICAvLyAgIC8vIGJ1aWxkIHNjZW5lXHJcbiAgLy8gICB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoeyB0cmlnZ2VyRWxlbWVudDogXCIjY29sb3Bob25cIiwgdHJpZ2dlckhvb2s6IFwib25FbnRlclwiIH0pXHJcbiAgLy8gICAgIC5hZGRUbyh0aGF0LnN0YXRlLmNvbnRyb2xsZXIpXHJcbiAgLy8gICAgIC5vbihcImVudGVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gICAgICAgaWYgKHRoYXQuc3RhdGUuZ2V0UG9zdHMgJiYgdGhhdC5nZXRNb3JlUG9zdHMgIT09IG51bGwpIHtcclxuICAvLyAgICAgICAgIHRoYXQuZ2V0TW9yZVBvc3RzKCk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcblxyXG5cdC8vIGdldE1vcmVQb3N0cygpIHtcclxuICAvLyAgIHZhciB0aGF0ID0gdGhpcztcclxuICAvLyAgIHZhciB0b3RhbFBhZ2VzO1xyXG5cclxuICAvLyAgIC8vIGFkZGluZyBhIGxvYWRlclxyXG4gIC8vICAgalF1ZXJ5KFwiI2xvYWRlclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgcGFnZTogdGhpcy5zdGF0ZS5wYWdlICsgMSB9KTtcclxuXHJcbiAgLy8gICBmZXRjaChOZW9tb3JwaFNldHRpbmdzLlVSTC5hcGkgKyBcIi9wb3N0cy8/cGFnZT1cIiArIHRoaXMuc3RhdGUucGFnZSlcclxuICAvLyAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgZm9yICh2YXIgcGFpciBvZiByZXNwb25zZS5oZWFkZXJzLmVudHJpZXMoKSkge1xyXG5cclxuICAvLyAgICAgICAgIC8vIGdldHRpbmcgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xyXG4gIC8vICAgICAgICAgaWYgKHBhaXJbMF0gPT0gJ3gtd3AtdG90YWxwYWdlcycpIHtcclxuICAvLyAgICAgICAgICAgdG90YWxQYWdlcyA9IHBhaXJbMV07XHJcbiAgLy8gICAgICAgICB9XHJcblxyXG4gIC8vICAgICAgICAgaWYgKHRoYXQuc3RhdGUucGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgLy8gICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyBnZXRQb3N0czogZmFsc2UgfSlcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gIC8vICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcclxuICAvLyAgICAgdmFyIGFsbFBvc3RzID0gdGhhdC5zdGF0ZS5wb3N0cy5zbGljZSgpO1xyXG4gIC8vICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHNpbmdsZSkge1xyXG4gIC8vICAgICAgIGFsbFBvc3RzLnB1c2goc2luZ2xlKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgdGhhdC5zZXRTdGF0ZSh7IHBvc3RzOiBhbGxQb3N0cyB9KTtcclxuXHJcbiAgLy8gICAgIC8vIHJlbW92aW5nIHRoZSBsb2FkZXJcclxuICAvLyAgICAgalF1ZXJ5KFwiI2xvYWRlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOiAnICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgLy8gICAgIGpRdWVyeShcIiNsb2FkZXJcIikucmVtb3ZlKCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAvLyAgIHZhciBGYWRlSW5Db250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuICAvLyAgIGpRdWVyeSgnLnBvc3RzLWNvbnRhaW5lciAuY29sLW1kLTQuY2FyZC1vdXRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAvLyAgICAgLy8gYnVpbGQgYSBzY2VuZVxyXG4gIC8vICAgICB2YXIgRmFkZUluU2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG4gIC8vICAgICAgIHRyaWdnZXJFbGVtZW50OiB0aGlzLmNoaWxkcmVuWzBdLFxyXG4gIC8vICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gIC8vICAgICAgIHRyaWdnZXJIb29rOiAxXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgICAgLnNldENsYXNzVG9nZ2xlKHRoaXMsICdmYWRlLWluJylcclxuICAvLyAgICAgICAuYWRkVG8oRmFkZUluQ29udHJvbGxlcik7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHJlbmRlcigpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMucG9zdHMpOyBcclxuICAvLyAgIGlmICh0aGlzLnN0YXRlLnBvc3RzLmxlbmd0aCA9PSAwKSB7XHJcbiAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLy8gPGltZyBzcmM9e0xvYWRpbmdJY29ufSBhbHQ9XCJsb2FkZXIgZ2lmXCIgaWQ9XCJsb2FkZXJcIiAvPlxyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0cy1tb2R1bGVcIj4gICAgICBcclxuICAvLyAgICAgICA8aDIgY2xhc3NOYW1lPVwicG9zdHMtdGl0bGVcIj5SZWNlbnQgUG9zdHM8L2gyPlxyXG4gIC8vICAgICAgIDxQb3N0TGlzdCBwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c30gLz5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuXHJcbi8vICAgbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbi8vICAgICByZXR1cm4ge3Bvc3RzOiBzdGF0ZS5wb3N0c307XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtmZXRjaFBvc3RzfSkgKFBvc3RzKTtcclxuLy8gLy8gUG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==