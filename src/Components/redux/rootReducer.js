import TodoReducer from "./todos/TodoReducer";
import filterReducer from "./filters/filterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: TodoReducer,
  filters: filterReducer,
});

export default rootReducer;
