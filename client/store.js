import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducer/index';

import comments form './data/comment';
import posts from '.data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
