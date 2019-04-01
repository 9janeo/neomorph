webpackHotUpdate("app",{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: SEARCH_WEBSITE, FETCH_PROJECTS, FETCH_PROJECT, FETCH_POSTS, FETCH_PAGES, FETCH_PAGE, CREATE_PROJECT, BUILD_APP, BUILD_MENUS, buildApp, searchWebsite, fetchProjects, fetchProject, createProject, fetchPosts, fetchPages, fetchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_WEBSITE", function() { return SEARCH_WEBSITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROJECTS", function() { return FETCH_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PROJECT", function() { return FETCH_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS", function() { return FETCH_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PAGES", function() { return FETCH_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PAGE", function() { return FETCH_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PROJECT", function() { return CREATE_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILD_APP", function() { return BUILD_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILD_MENUS", function() { return BUILD_MENUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildApp", function() { return buildApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchWebsite", function() { return searchWebsite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjects", function() { return fetchProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProject", function() { return fetchProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPages", function() { return fetchPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPage", function() { return fetchPage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


//Middleware handled using redux-promise in top level index
const ROOT_URL = NeomorphSettings.URL.api;
const ROOT_PATH = NeomorphSettings.URL.root;
const FIND_IN = "/posts?type[]=post&type[]=page&type[]=projects";
const API_KEY = "Wordpress API not secured yet";

const SEARCH_WEBSITE = 'SEARCH_WEBSITE';
const FETCH_PROJECTS = 'fetch_projects';
const FETCH_PROJECT = 'fetch_project';
const FETCH_POSTS = 'fetch_posts';
const FETCH_PAGES = 'FETCH_PAGES';
const FETCH_PAGE = 'FETCH_PAGE';
const CREATE_PROJECT = 'create_project';
const BUILD_APP = 'BUILD_APP';
const BUILD_MENUS = 'BUILD_MENUS';

function buildApp(type) {
	const show = type !== undefined ? type : ' ';
	const url = `${ROOT_PATH}`;
	const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);

	return {
		type: BUILD_APP,
		payload: request
	};
}

function searchWebsite(term) {
	const url = `${ROOT_URL}${FIND_IN}&search=${term}`;
	const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);

	return {
		type: SEARCH_WEBSITE,
		payload: request
	};
}

function fetchProjects() {
	const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ROOT_URL}/projects?&_embed`);

	return {
		type: FETCH_PROJECTS,
		payload: request
	};
}

function fetchProject(id) {
	const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ROOT_URL}/projects/${id}`);

	return {
		type: FETCH_PROJECT,
		payload: request
	};
}

function createProject() {
	const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${ROOT_URL}/projects?&_embed`);

	return {
		type: FETCH_PROJECTS,
		payload: request
	};
}

function fetchPosts() {
	const url = `${ROOT_URL}/posts&_embed`;
	const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

function fetchPages() {
	const url = `${ROOT_URL}/pages`;
	const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);

	return {
		type: FETCH_PAGES,
		payload: request
	};
}

function fetchPage(pageName) {
	const slug = pageName !== undefined ? pageName : 'home';
	const url = `${ROOT_URL}/pages?slug=${slug}`;
	const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);

	return {
		type: FETCH_PAGE,
		payload: request
	};
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyJdLCJuYW1lcyI6WyJST09UX1VSTCIsIk5lb21vcnBoU2V0dGluZ3MiLCJVUkwiLCJhcGkiLCJST09UX1BBVEgiLCJyb290IiwiRklORF9JTiIsIkFQSV9LRVkiLCJTRUFSQ0hfV0VCU0lURSIsIkZFVENIX1BST0pFQ1RTIiwiRkVUQ0hfUFJPSkVDVCIsIkZFVENIX1BPU1RTIiwiRkVUQ0hfUEFHRVMiLCJGRVRDSF9QQUdFIiwiQ1JFQVRFX1BST0pFQ1QiLCJCVUlMRF9BUFAiLCJCVUlMRF9NRU5VUyIsImJ1aWxkQXBwIiwidHlwZSIsInNob3ciLCJ1bmRlZmluZWQiLCJ1cmwiLCJyZXF1ZXN0IiwiYXhpb3MiLCJnZXQiLCJwYXlsb2FkIiwic2VhcmNoV2Vic2l0ZSIsInRlcm0iLCJmZXRjaFByb2plY3RzIiwiZmV0Y2hQcm9qZWN0IiwiaWQiLCJjcmVhdGVQcm9qZWN0IiwicG9zdCIsImZldGNoUG9zdHMiLCJmZXRjaFBhZ2VzIiwiZmV0Y2hQYWdlIiwicGFnZU5hbWUiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBLE1BQU1BLFdBQVdDLGlCQUFpQkMsR0FBakIsQ0FBcUJDLEdBQXRDO0FBQ0EsTUFBTUMsWUFBWUgsaUJBQWlCQyxHQUFqQixDQUFxQkcsSUFBdkM7QUFDQSxNQUFNQyxVQUFVLGdEQUFoQjtBQUNBLE1BQU1DLFVBQVUsK0JBQWhCOztBQUVPLE1BQU1DLGlCQUFpQixnQkFBdkI7QUFDQSxNQUFNQyxpQkFBaUIsZ0JBQXZCO0FBQ0EsTUFBTUMsZ0JBQWdCLGVBQXRCO0FBQ0EsTUFBTUMsY0FBYyxhQUFwQjtBQUNBLE1BQU1DLGNBQWMsYUFBcEI7QUFDQSxNQUFNQyxhQUFhLFlBQW5CO0FBQ0EsTUFBTUMsaUJBQWlCLGdCQUF2QjtBQUNBLE1BQU1DLFlBQVksV0FBbEI7QUFDQSxNQUFNQyxjQUFjLGFBQXBCOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQzlCLE9BQU1DLE9BQVFELFNBQVNFLFNBQVYsR0FBdUJGLElBQXZCLEdBQThCLEdBQTNDO0FBQ0EsT0FBTUcsTUFBTyxHQUFFakIsU0FBVSxFQUF6QjtBQUNBLE9BQU1rQixVQUFVLDRDQUFBQyxDQUFNQyxHQUFOLENBQVVILEdBQVYsQ0FBaEI7O0FBRUEsUUFBTztBQUNOSCxRQUFNSCxTQURBO0FBRU5VLFdBQVNIO0FBRkgsRUFBUDtBQUlBOztBQUdNLFNBQVNJLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCO0FBQ25DLE9BQU1OLE1BQU8sR0FBRXJCLFFBQVMsR0FBRU0sT0FBUSxXQUFVcUIsSUFBSyxFQUFqRDtBQUNBLE9BQU1MLFVBQVUsNENBQUFDLENBQU1DLEdBQU4sQ0FBVUgsR0FBVixDQUFoQjs7QUFFQSxRQUFPO0FBQ05ILFFBQU1WLGNBREE7QUFFTmlCLFdBQVNIO0FBRkgsRUFBUDtBQUlBOztBQUVNLFNBQVNNLGFBQVQsR0FBeUI7QUFDL0IsT0FBTU4sVUFBVSw0Q0FBQUMsQ0FBTUMsR0FBTixDQUFXLEdBQUV4QixRQUFTLG1CQUF0QixDQUFoQjs7QUFFQSxRQUFPO0FBQ05rQixRQUFNVCxjQURBO0FBRU5nQixXQUFTSDtBQUZILEVBQVA7QUFJQTs7QUFFTSxTQUFTTyxZQUFULENBQXNCQyxFQUF0QixFQUEwQjtBQUNoQyxPQUFNUixVQUFVLDRDQUFBQyxDQUFNQyxHQUFOLENBQVcsR0FBRXhCLFFBQVMsYUFBWThCLEVBQUcsRUFBckMsQ0FBaEI7O0FBRUEsUUFBTztBQUNOWixRQUFNUixhQURBO0FBRU5lLFdBQVNIO0FBRkgsRUFBUDtBQUlBOztBQUVNLFNBQVNTLGFBQVQsR0FBeUI7QUFDL0IsT0FBTVQsVUFBVSw0Q0FBQUMsQ0FBTVMsSUFBTixDQUFZLEdBQUVoQyxRQUFTLG1CQUF2QixDQUFoQjs7QUFFQSxRQUFPO0FBQ05rQixRQUFNVCxjQURBO0FBRU5nQixXQUFTSDtBQUZILEVBQVA7QUFJQTs7QUFFTSxTQUFTVyxVQUFULEdBQXNCO0FBQzVCLE9BQU1aLE1BQU8sR0FBRXJCLFFBQVMsZUFBeEI7QUFDQSxPQUFNc0IsVUFBVSw0Q0FBQUMsQ0FBTUMsR0FBTixDQUFVSCxHQUFWLENBQWhCOztBQUVBLFFBQU87QUFDTkgsUUFBTVAsV0FEQTtBQUVOYyxXQUFTSDtBQUZILEVBQVA7QUFJQTs7QUFFTSxTQUFTWSxVQUFULEdBQXNCO0FBQzVCLE9BQU1iLE1BQU8sR0FBRXJCLFFBQVMsUUFBeEI7QUFDQSxPQUFNc0IsVUFBVSw0Q0FBQUMsQ0FBTUMsR0FBTixDQUFVSCxHQUFWLENBQWhCOztBQUVBLFFBQU87QUFDTkgsUUFBTU4sV0FEQTtBQUVOYSxXQUFTSDtBQUZILEVBQVA7QUFJQTs7QUFFTSxTQUFTYSxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUNuQyxPQUFNQyxPQUFRRCxhQUFhaEIsU0FBZCxHQUEyQmdCLFFBQTNCLEdBQXNDLE1BQW5EO0FBQ0EsT0FBTWYsTUFBTyxHQUFFckIsUUFBUyxlQUFjcUMsSUFBSyxFQUEzQztBQUNBLE9BQU1mLFVBQVUsNENBQUFDLENBQU1DLEdBQU4sQ0FBVUgsR0FBVixDQUFoQjs7QUFFQSxRQUFPO0FBQ05ILFFBQU1MLFVBREE7QUFFTlksV0FBU0g7QUFGSCxFQUFQO0FBSUEsQyIsImZpbGUiOiJhcHAuNDFkOWZjODY5NTZiMzZkOWJmZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vL01pZGRsZXdhcmUgaGFuZGxlZCB1c2luZyByZWR1eC1wcm9taXNlIGluIHRvcCBsZXZlbCBpbmRleFxyXG5jb25zdCBST09UX1VSTCA9IE5lb21vcnBoU2V0dGluZ3MuVVJMLmFwaTtcclxuY29uc3QgUk9PVF9QQVRIID0gTmVvbW9ycGhTZXR0aW5ncy5VUkwucm9vdDtcclxuY29uc3QgRklORF9JTiA9IFwiL3Bvc3RzP3R5cGVbXT1wb3N0JnR5cGVbXT1wYWdlJnR5cGVbXT1wcm9qZWN0c1wiO1xyXG5jb25zdCBBUElfS0VZID0gXCJXb3JkcHJlc3MgQVBJIG5vdCBzZWN1cmVkIHlldFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9XRUJTSVRFID0gJ1NFQVJDSF9XRUJTSVRFJztcclxuZXhwb3J0IGNvbnN0IEZFVENIX1BST0pFQ1RTID0gJ2ZldGNoX3Byb2plY3RzJztcclxuZXhwb3J0IGNvbnN0IEZFVENIX1BST0pFQ1QgPSAnZmV0Y2hfcHJvamVjdCc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9QT1NUUyA9ICdmZXRjaF9wb3N0cyc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9QQUdFUyA9ICdGRVRDSF9QQUdFUyc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9QQUdFID0gJ0ZFVENIX1BBR0UnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BST0pFQ1QgPSAnY3JlYXRlX3Byb2plY3QnO1xyXG5leHBvcnQgY29uc3QgQlVJTERfQVBQID0gJ0JVSUxEX0FQUCc7XHJcbmV4cG9ydCBjb25zdCBCVUlMRF9NRU5VUyA9ICdCVUlMRF9NRU5VUyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRBcHAodHlwZSkge1xyXG5cdGNvbnN0IHNob3cgPSAodHlwZSAhPT0gdW5kZWZpbmVkKSA/IHR5cGUgOiAnICc7XHJcblx0Y29uc3QgdXJsID0gYCR7Uk9PVF9QQVRIfWA7XHRcclxuXHRjb25zdCByZXF1ZXN0ID0gYXhpb3MuZ2V0KHVybCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBCVUlMRF9BUFAsXHJcblx0XHRwYXlsb2FkOiByZXF1ZXN0XHJcblx0fTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hXZWJzaXRlKHRlcm0pIHtcclxuXHRjb25zdCB1cmwgPSBgJHtST09UX1VSTH0ke0ZJTkRfSU59JnNlYXJjaD0ke3Rlcm19YDtcclxuXHRjb25zdCByZXF1ZXN0ID0gYXhpb3MuZ2V0KHVybCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBTRUFSQ0hfV0VCU0lURSxcclxuXHRcdHBheWxvYWQ6IHJlcXVlc3RcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9qZWN0cygpIHtcclxuXHRjb25zdCByZXF1ZXN0ID0gYXhpb3MuZ2V0KGAke1JPT1RfVVJMfS9wcm9qZWN0cz8mX2VtYmVkYCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBGRVRDSF9QUk9KRUNUUyxcclxuXHRcdHBheWxvYWQ6IHJlcXVlc3RcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9qZWN0KGlkKSB7XHJcblx0Y29uc3QgcmVxdWVzdCA9IGF4aW9zLmdldChgJHtST09UX1VSTH0vcHJvamVjdHMvJHtpZH1gKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEZFVENIX1BST0pFQ1QsXHJcblx0XHRwYXlsb2FkOiByZXF1ZXN0XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XHJcblx0Y29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QoYCR7Uk9PVF9VUkx9L3Byb2plY3RzPyZfZW1iZWRgKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEZFVENIX1BST0pFQ1RTLFxyXG5cdFx0cGF5bG9hZDogcmVxdWVzdFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzKCkge1xyXG5cdGNvbnN0IHVybCA9IGAke1JPT1RfVVJMfS9wb3N0cyZfZW1iZWRgO1xyXG5cdGNvbnN0IHJlcXVlc3QgPSBheGlvcy5nZXQodXJsKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IEZFVENIX1BPU1RTLFxyXG5cdFx0cGF5bG9hZDogcmVxdWVzdFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBhZ2VzKCkge1xyXG5cdGNvbnN0IHVybCA9IGAke1JPT1RfVVJMfS9wYWdlc2A7XHJcblx0Y29uc3QgcmVxdWVzdCA9IGF4aW9zLmdldCh1cmwpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogRkVUQ0hfUEFHRVMsXHJcblx0XHRwYXlsb2FkOiByZXF1ZXN0XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUGFnZShwYWdlTmFtZSkge1xyXG5cdGNvbnN0IHNsdWcgPSAocGFnZU5hbWUgIT09IHVuZGVmaW5lZCkgPyBwYWdlTmFtZSA6ICdob21lJztcclxuXHRjb25zdCB1cmwgPSBgJHtST09UX1VSTH0vcGFnZXM/c2x1Zz0ke3NsdWd9YDtcclxuXHRjb25zdCByZXF1ZXN0ID0gYXhpb3MuZ2V0KHVybCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBGRVRDSF9QQUdFLFxyXG5cdFx0cGF5bG9hZDogcmVxdWVzdFxyXG5cdH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9