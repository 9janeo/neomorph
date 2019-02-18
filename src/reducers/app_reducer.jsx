import _ from 'lodash';
import { BUILD_APP, BUILD_MENUS } from '../actions';
// import projects_index from '../components/projects_index';

export default function(state = [] , action) {
    switch (action.type) {
        case BUILD_APP:
            // "name": "Portfolio",
            // "description": "A curation of my work",
            // "url": "http://localhost/portfolio",
            // "home": "http://localhost/portfolio",
<<<<<<< 2d390c137cc6a1409dae9f4a7a32e444f90949d5
            // const project = action.payload.data;
            // const newState = [ ...state ];
            // newState[project.id] = project;
            // return newState;
=======
            const project = action.payload.data;
            const newState = [ ...state ];
            newState[project.id] = project;
            return newState;
>>>>>>> Adding functionality to display single post
            // return { ...state, [action.payload.data.id]: action.payload.data };
        case BUILD_MENUS:
            // console.log(action.payload.data); // expect a collection of projects
            // Map individual pages, all posts, all projects and individual project types
            return _.mapKeys(action.payload.data, 'id'); // enables us to do simple Id lookups on state.projects in future
        default:
            return state;
    }
}