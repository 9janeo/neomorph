import { SEARCH_WEBSITE } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case SEARCH_WEBSITE:
		// to collect search results over time
		// return [ action.payload.data, ...state ];
		return action.payload.data;
	}
	return state;
}
