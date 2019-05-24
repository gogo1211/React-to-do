import { combineReducers } from 'redux';

import profileReducer from './profile';
import skillsReducer from './skills';

export default combineReducers({
  profile: profileReducer,
  skills: skillsReducer,
});
