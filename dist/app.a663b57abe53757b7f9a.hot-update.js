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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3N0cy5qc3giXSwibmFtZXMiOlsiUG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiZmV0Y2hQb3N0cyIsInJlbmRlclBvc3RzIiwiXyIsIm1hcCIsInBvc3RzIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJfZW1iZWRkZWQiLCJpZCIsInNsdWciLCJmZWF0dXJlZF9pbWFnZV9zcmMiLCJOZW9tb3JwaFNldHRpbmdzIiwicGF0aCIsInRpdGxlIiwicmVuZGVyZWQiLCJfbGlua3MiLCJhdXRob3IiLCJocmVmIiwiYXV0aG9yX25hbWUiLCJwdWJsaXNoZWRfZGF0ZSIsImpRdWVyeSIsImV4Y2VycHQiLCJ0ZXh0IiwicmVuZGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CLCtDQUFwQixDQUE4Qjs7QUFFMUJDLHdCQUFvQjtBQUNoQixhQUFLQyxLQUFMLENBQVdDLFVBQVg7QUFDSDs7QUFFREMsa0JBQWM7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFPLDZDQUFBQyxDQUFFQyxHQUFGLENBQU0sS0FBS0osS0FBTCxDQUFXSyxLQUFqQixFQUF3QkMsUUFBUTtBQUNuQztBQUNBQyxvQkFBUUMsR0FBUixDQUFZRixLQUFLRyxTQUFqQjtBQUNBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLHNCQUFmLEVBQXNDLEtBQUtILEtBQUtJLEVBQWhEO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsWUFBZjtBQUNBO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFDLGlGQUFEO0FBQUEsOEJBQU0sSUFBSSxnQkFBZ0JKLEtBQUtLLElBQS9C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bXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vLyBpbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSAnc2Nyb2xsbWFnaWMvc2Nyb2xsbWFnaWMvdW5jb21wcmVzc2VkL1Njcm9sbE1hZ2ljJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZmV0Y2hQb3N0cyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vbG9hZGluZy1pY29uLnBuZyc7XHJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tICcuLi9wbGFjZWhvbGRlci5wbmcnO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29udGFpbmVycy9wb3N0LWxpc3QnO1xyXG5cclxuY2xhc3MgUG9zdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hQb3N0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvc3RzKCkge1xyXG4gICAgICAgIC8vZ2V0IGFsbCBwcm9qZWN0cyBhbmQgZGlzcGxheSBwcm9wZXJseVxyXG5cclxuICAgICAgICAvLyBbe05hbWU6IHByb2plY3RzfV0ubWFwKChhbk9iamVjdE1hcHBlZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIChcclxuICAgICAgICAvLyAgICAgICAgIDxwIGtleT17YCR7YW5PYmplY3RNYXBwZWQubmFtZX1fe2FuT2JqZWN0TWFwcGVkLmVtYWlsfWB9PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHthbk9iamVjdE1hcHBlZC5uYW1lfSAtIHthbk9iamVjdE1hcHBlZC5lbWFpbH1cclxuICAgICAgICAvLyAgICAgICAgIDwvcD5cclxuICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICByZXR1cm4gXy5tYXAodGhpcy5wcm9wcy5wb3N0cywgcG9zdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbWFnZSA9IHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ11bMF0uaHJlZlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0Ll9lbWJlZGRlZCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1vdXRlciBncmlkLWl0ZW1cIiBrZXk9e3Bvc3QuaWR9PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89eydwb3N0Lz9zbHVnPScgKyBwb3N0LnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Bvc3QuZmVhdHVyZWRfaW1hZ2Vfc3JjID8gcG9zdC5mZWF0dXJlZF9pbWFnZV9zcmMgOiBQbGFjZWhvbGRlcn0gYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48TGluayB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgYHBvc3RzP2lkPSR7cG9zdC5pZH1gfT57cG9zdC50aXRsZS5yZW5kZXJlZH08L0xpbms+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtYXV0aG9yXCI+UG9zdCBtYWRlIGJ5OiA8TGluayB0bz17cG9zdC5fbGlua3MuYXV0aG9yWzBdLmhyZWZ9Pntwb3N0LmF1dGhvcl9uYW1lfTwvTGluaz48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj48c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntwb3N0LmF1dGhvcl9uYW1lfSAmbmRhc2g7IHtwb3N0LnB1Ymxpc2hlZF9kYXRlfTwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbWctb3V0ZXIgY2FudmFzVGh1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyBwb3N0LnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtwb3N0LmZlYXR1cmVkX2ltYWdlX3NyYyA/IHBvc3QuZmVhdHVyZWRfaW1hZ2Vfc3JjIDogUGxhY2Vob2xkZXJ9IGFsdD1cIkZlYXR1cmVkIEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57alF1ZXJ5KHBvc3QuZXhjZXJwdC5yZW5kZXJlZCkudGV4dCgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHRvPXtOZW9tb3JwaFNldHRpbmdzLnBhdGggKyAncG9zdHMvJyArIHBvc3RzLmlkfT5SZWFkIG1vcmU8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyIHBvc3RzIGJlbG93OlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LW1vZHVsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz17TmVvbW9ycGhTZXR0aW5ncy5wYXRoICsgJ3Bvc3RzL25ldyd9Pk5ldyBQb3N0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+UmVjZW50IFBvc3RzPC9oMT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyIGdyaWQtY29udGFpbmVyXCI+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9qZWN0TGlzdCBwcm9qZWN0cz17dGhpcy5wcm9wcy5wcm9qZWN0c30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTsgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICAgIHJldHVybiB7IHBvc3RzOiBzdGF0ZS5wb3N0cyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaFBvc3RzIH0pKFBvc3RzKTtcclxuXHJcblxyXG5cclxuICAvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gIC8vICAgc3VwZXIocHJvcHMpO1xyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSB0aGlzLmdldE1vcmVQb3N0cy5iaW5kKHRoaXMpO1xyXG4gIC8vICAgdGhpcy5zdGF0ZSA9IHtcclxuICAvLyAgICAgcG9zdHM6IFtdLFxyXG4gIC8vICAgICBwYWdlOiAwLFxyXG4gIC8vICAgICBnZXRQb3N0czogdHJ1ZSxcclxuICAvLyAgICAgY29udHJvbGxlcjogZmFsc2VcclxuICAvLyAgIH1cclxuICAvLyAgIHRoaXMuZ2V0TW9yZVBvc3RzID0gdGhpcy5nZXRNb3JlUG9zdHMuYmluZCh0aGlzKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gIC8vICAgdGhpcy5nZXRNb3JlUG9zdHMgPSBudWxsO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgLy8gICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgfVxyXG5cclxuICAvLyAgIC8vIGluaXQgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclxyXG4gIC8vICAgdGhhdC5zdGF0ZS5jb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHJcbiAgLy8gICAvLyBidWlsZCBzY2VuZVxyXG4gIC8vICAgdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHsgdHJpZ2dlckVsZW1lbnQ6IFwiI2NvbG9waG9uXCIsIHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIiB9KVxyXG4gIC8vICAgICAuYWRkVG8odGhhdC5zdGF0ZS5jb250cm9sbGVyKVxyXG4gIC8vICAgICAub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgICAgIGlmICh0aGF0LnN0YXRlLmdldFBvc3RzICYmIHRoYXQuZ2V0TW9yZVBvc3RzICE9PSBudWxsKSB7XHJcbiAgLy8gICAgICAgICB0aGF0LmdldE1vcmVQb3N0cygpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuXHQvLyBnZXRNb3JlUG9zdHMoKSB7XHJcbiAgLy8gICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgLy8gICB2YXIgdG90YWxQYWdlcztcclxuXHJcbiAgLy8gICAvLyBhZGRpbmcgYSBsb2FkZXJcclxuICAvLyAgIGpRdWVyeShcIiNsb2FkZXJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDEgfSk7XHJcblxyXG4gIC8vICAgZmV0Y2goTmVvbW9ycGhTZXR0aW5ncy5VUkwuYXBpICsgXCIvcG9zdHMvP3BhZ2U9XCIgKyB0aGlzLnN0YXRlLnBhZ2UpXHJcbiAgLy8gICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gIC8vICAgICAgIGZvciAodmFyIHBhaXIgb2YgcmVzcG9uc2UuaGVhZGVycy5lbnRyaWVzKCkpIHtcclxuXHJcbiAgLy8gICAgICAgICAvLyBnZXR0aW5nIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXNcclxuICAvLyAgICAgICAgIGlmIChwYWlyWzBdID09ICd4LXdwLXRvdGFscGFnZXMnKSB7XHJcbiAgLy8gICAgICAgICAgIHRvdGFsUGFnZXMgPSBwYWlyWzFdO1xyXG4gIC8vICAgICAgICAgfVxyXG5cclxuICAvLyAgICAgICAgIGlmICh0aGF0LnN0YXRlLnBhZ2UgPj0gdG90YWxQYWdlcykge1xyXG4gIC8vICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgZ2V0UG9zdHM6IGZhbHNlIH0pXHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAvLyAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgfSlcclxuICAvLyAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgLy8gICAgIHZhciBhbGxQb3N0cyA9IHRoYXQuc3RhdGUucG9zdHMuc2xpY2UoKTtcclxuICAvLyAgICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChzaW5nbGUpIHtcclxuICAvLyAgICAgICBhbGxQb3N0cy5wdXNoKHNpbmdsZSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIHRoYXQuc2V0U3RhdGUoeyBwb3N0czogYWxsUG9zdHMgfSk7XHJcblxyXG4gIC8vICAgICAvLyByZW1vdmluZyB0aGUgbG9hZGVyXHJcbiAgLy8gICAgIGpRdWVyeShcIiNsb2FkZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gIC8vICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW0gd2l0aCB5b3VyIGZldGNoIG9wZXJhdGlvbjogJyArIGVycm9yLm1lc3NhZ2UpO1xyXG4gIC8vICAgICBqUXVlcnkoXCIjbG9hZGVyXCIpLnJlbW92ZSgpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgLy8gICB2YXIgRmFkZUluQ29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcbiAgLy8gICBqUXVlcnkoJy5wb3N0cy1jb250YWluZXIgLmNvbC1tZC00LmNhcmQtb3V0ZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy8gICAgIC8vIGJ1aWxkIGEgc2NlbmVcclxuICAvLyAgICAgdmFyIEZhZGVJblNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuICAvLyAgICAgICB0cmlnZ2VyRWxlbWVudDogdGhpcy5jaGlsZHJlblswXSxcclxuICAvLyAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAvLyAgICAgICB0cmlnZ2VySG9vazogMVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAgIC5zZXRDbGFzc1RvZ2dsZSh0aGlzLCAnZmFkZS1pbicpXHJcbiAgLy8gICAgICAgLmFkZFRvKEZhZGVJbkNvbnRyb2xsZXIpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyByZW5kZXIoKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTsgXHJcbiAgLy8gICBpZiAodGhpcy5zdGF0ZS5wb3N0cy5sZW5ndGggPT0gMCkge1xyXG4gIC8vICAgICByZXR1cm4gbnVsbDtcclxuICAvLyAgIH1cclxuICAvLyAgIC8vIDxpbWcgc3JjPXtMb2FkaW5nSWNvbn0gYWx0PVwibG9hZGVyIGdpZlwiIGlkPVwibG9hZGVyXCIgLz5cclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtbW9kdWxlXCI+ICAgICAgXHJcbiAgLy8gICAgICAgPGgyIGNsYXNzTmFtZT1cInBvc3RzLXRpdGxlXCI+UmVjZW50IFBvc3RzPC9oMj5cclxuICAvLyAgICAgICA8UG9zdExpc3QgcG9zdHM9e3RoaXMuc3RhdGUucG9zdHN9IC8+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4vLyAgIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4vLyAgICAgcmV0dXJuIHtwb3N0czogc3RhdGUucG9zdHN9O1xyXG4vLyAgIH1cclxuXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7ZmV0Y2hQb3N0c30pIChQb3N0cyk7XHJcbi8vIC8vIFBvc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=