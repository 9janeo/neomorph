import _ from 'lodash';
import { FETCH_PROJECTS, FETCH_PROJECT } from '../actions';
// import projects_index from '../components/projects_index';

export default function(state = [] , action) {
    switch (action.type) {
        case FETCH_PROJECT:
            // console.log ("fetching..:" + [action.payload.data].params);
            // const project = action.payload.data;
            // // const newState = [ ...state ];
            // console.log ("Reducer Project:" + project);
            // newState[project.id] = project;
            // return newState;
            return { [action.payload.data.id]: action.payload.data, state };
        case FETCH_PROJECTS:
            // console.log(action.payload.data); // expect a collection of projects
            return _.mapKeys(action.payload.data, 'id'); // enables us to do simple Id lookups on state.projects in future
        default:
            return state;
    }
}