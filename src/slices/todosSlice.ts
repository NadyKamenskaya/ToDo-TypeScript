import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import RootState from '.';

import { Status, ToDo } from '../types';

const todosAdapter = createEntityAdapter<ToDo>();

const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: todosAdapter.addOne,
    removeTodo: (state, { payload }) => todosAdapter.removeOne(state, payload.id),
    removeTodos: todosAdapter.removeAll,
    changeStatus: (state, { payload: { id, status } }) => {
      const currentTodo = state.entities[id];
      if (currentTodo) {
        if (status === Status.DONE) {
          currentTodo.status = Status.NOT_DONE;
        } else {
          currentTodo.status = Status.DONE;
        }
      }
    },
  },
});

export const {
  addTodo, removeTodo, removeTodos, changeStatus,
} = todosSlice.actions;

export const selectAllTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
