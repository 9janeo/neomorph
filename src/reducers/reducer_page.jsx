import { FETCH_PAGE } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_PAGE:
		// to collect search results over time
		return [ action.payload.data, ...state ];
		// console.log(action.payload.data);
		
	default:
		return state;
	}
}
