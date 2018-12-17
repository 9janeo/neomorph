import { FETCH_PROJECTS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_PROJECTS:
            // console.log(action.payload.data); // expect a collection of projects
            return _.mapKeys(action.payload.data, 'id'); // enables us to do simple Id lookups on state.projects in future
        default:
            return state;
    }
}