import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './todosSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    modal: modalReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export default RootState;
