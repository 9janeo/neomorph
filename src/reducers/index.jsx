import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import PagesReducer from './reducer_pages';
// import { reducer as formReducer } from 'redux-form';
// import PostsReducer from './reducer_posts'

const rootReducer = combineReducers({
  pages: PagesReducer,
  search: SearchReducer
});

export default rootReducer;
