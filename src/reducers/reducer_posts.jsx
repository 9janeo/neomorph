import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
// import projects_index from '../components/posts_index';

export default function(state = [] , action) {
    switch (action.type) {
        // case FETCH_POST:
        //     // console.log ("fetching..:" + [action.payload.data].params);
        //     // const post = action.payload.data;
        //     // // const newState = [ ...state ];
        //     // console.log ("Reducer Post:" + post);
        //     // newState[post.id] = post;
        //     // return newState;
        //     return { [action.payload.data.id]: action.payload.data, state };
        case FETCH_POSTS:
            // console.log(action.payload.data); // expect a collection of post
            // return console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id'); // enables us to do simple Id lookups on state.post in future
        default:
            return state;
    }
}