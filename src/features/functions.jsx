import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const addTodo = createAction("addTodo");
export const deleteTodo = createAction("deleteTodo");
export const favorite = createAction("favorite");

export const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.items.push(action.payload);
  });
  builder.addCase(deleteTodo, (state, action) => {
    state.items.splice(action.payload, 1);
  });
  builder.addCase(favorite, (state, action) => {
    state.items.map((item, index) => {
      if (index === action.payload) {
        item.favorite = !item.favorite;
      }
      return item;
    });
  });
});
