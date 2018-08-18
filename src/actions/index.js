import axios from 'axios';

//Middleware handled using redux-promise in top level index
const ROOT_URL = NeomorphSettings.URL.api;
const FIND_IN = "/posts?type[]=post&type[]=page&type[]=projects";

export const SEARCH_WEBSITE = 'SEARCH_WEBSITE';

export function searchWebsite(term) {
	const url = `${ROOT_URL}${FIND_IN}&search=${term}`;
	const request = axios.get(url);

	return {
		type: SEARCH_WEBSITE,
		payload: request
	};
}

export const FETCH_PAGES = 'FETCH_PAGES';

export function fetchPages() {
	const url = `${ROOT_URL}/pages`;
	const request = axios.get(url);

	return {
		type: FETCH_PAGES,
		payload: request
	};
}

export const FETCH_PAGE = 'FETCH_PAGE';

export function fetchPage(pageName) {
	const url = `${ROOT_URL}/pages?slug=${pageName}`;
	const request = axios.get(url);

	return {
		type: FETCH_PAGE,
		payload: request
	};
}