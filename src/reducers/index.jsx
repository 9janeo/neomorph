import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SearchReducer from './reducer_search';
import PagesReducer from './reducer_pages';
import ProjectsReducer from './reducer_projects';
// import { reducer as formReducer } from 'redux-form';
// import PostsReducer from './reducer_posts'

const rootReducer = combineReducers({
  pages: PagesReducer,
  search: SearchReducer,
  projects: ProjectsReducer,
  form: formReducer
});

export default rootReducer;
