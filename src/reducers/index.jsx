import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AppReducer from './app_reducer';
import SearchReducer from './reducer_search';
import PagesReducer from './reducer_pages';
import ProjectsReducer from './reducer_projects';
import PostsReducer from './reducer_posts';
// import { reducer as formReducer } from 'redux-form';
// import PostsReducer from './reducer_posts'

const rootReducer = combineReducers({
  app: AppReducer,
  pages: PagesReducer,
  search: SearchReducer,
  projects: ProjectsReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
