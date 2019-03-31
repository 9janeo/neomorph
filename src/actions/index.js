import axios from 'axios';

//Middleware handled using redux-promise in top level index
const ROOT_URL = NeomorphSettings.URL.api;
const ROOT_PATH = NeomorphSettings.URL.root;
const FIND_IN = "/posts?type[]=post&type[]=page&type[]=projects";
const API_KEY = "Wordpress API not secured yet";

export const SEARCH_WEBSITE = 'SEARCH_WEBSITE';
export const FETCH_PROJECTS = 'fetch_projects';
export const FETCH_PROJECT = 'fetch_project';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_PAGES = 'FETCH_PAGES';
export const FETCH_PAGE = 'FETCH_PAGE';
export const CREATE_PROJECT = 'create_project';
export const BUILD_APP = 'BUILD_APP';
export const BUILD_MENUS = 'BUILD_MENUS';

export function buildApp(type) {
	const show = (type !== undefined) ? type : ' ';
	const url = `${ROOT_PATH}`;	
	const request = axios.get(url);

	return {
		type: BUILD_APP,
		payload: request
	};
}


export function searchWebsite(term) {
	const url = `${ROOT_URL}${FIND_IN}&search=${term}`;
	const request = axios.get(url);

	return {
		type: SEARCH_WEBSITE,
		payload: request
	};
}

export function fetchProjects() {
	const request = axios.get(`${ROOT_URL}/projects?&_embed`);

	return {
		type: FETCH_PROJECTS,
		payload: request
	};
}

export function fetchProject(id) {
	const request = axios.get(`${ROOT_URL}/projects/${id}`);

	return {
		type: FETCH_PROJECT,
		payload: request
	};
}

export function createProject() {
	const request = axios.post(`${ROOT_URL}/projects?&_embed`);

	return {
		type: FETCH_PROJECTS,
		payload: request
	};
}

export function fetchPosts() {
	const url = `${ROOT_URL}/posts?_embed`;
	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function fetchPages() {
	const url = `${ROOT_URL}/pages`;
	const request = axios.get(url);

	return {
		type: FETCH_PAGES,
		payload: request
	};
}

export function fetchPage(pageName) {
	const slug = (pageName !== undefined) ? pageName : 'home';
	const url = `${ROOT_URL}/pages?slug=${slug}`;
	const request = axios.get(url);

	return {
		type: FETCH_PAGE,
		payload: request
	};
}