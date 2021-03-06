import _ from 'lodash';
import { FETCH_PAGES } from '../actions/index';

export default function(state = {}, action) {
	switch (action.type) {
	case FETCH_PAGES:
		// console.log(action.payload.data);
		// return action.payload.data;
		return _.mapKeys(action.payload.data, 'id');
	
	default:
		return state;
	}	
}
