import { initialState } from "./initialState";
import {
  ADDEDTODO,
  CLEARCOMPLETED,
  DELETED,
  COLORS,
  COMPLETEDALLTASK,
  TOGGLED,
} from "./actionTypes";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDEDTODO:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
      });
    case COLORS:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== todoId);
    case COMPLETEDALLTASK:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default TodoReducer;
