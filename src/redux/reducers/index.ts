import { combineReducers } from 'redux';
import todoReducer from './modules/todoReducer';
const rootReducer = combineReducers({
  // Add your reducers here
  todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;