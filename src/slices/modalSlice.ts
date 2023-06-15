/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

import { ModalState } from '../types';

const initialState: ModalState = ({
  isOpen: false,
  type: null,
});

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, { payload: { type } }) => {
      state.isOpen = true;
      state.type = type;
    },
    close: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
