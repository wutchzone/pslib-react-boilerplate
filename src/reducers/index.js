import { combineReducers } from 'redux';

import GreetReducer from "./GreetReducer";

const rootReducer = combineReducers({
  greet: GreetReducer
});

export default rootReducer;