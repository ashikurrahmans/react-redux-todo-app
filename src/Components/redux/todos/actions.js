import {
  ADDEDTODO,
  CLEARCOMPLETED,
  COLORS,
  COMPLETEDALLTASK,
  TOGGLED,
  DELETED,
} from "./actionTypes";

export const addedTodo = (todo) => {
  return {
    type: ADDEDTODO,
    payload: todo,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todo,
  };
};

export const colors = (todoId, color) => {
  return {
    type: COLORS,
    payload: {
      todoId,
      color,
    },
  };
};
export const completedAllTask = (todoId) => {
  return {
    type: COMPLETEDALLTASK,
    payload: todoId,
  };
};

export const clearCompleted = (todoId) => {
  return {
    type: CLEARCOMPLETED,
    payload: todoId,
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
