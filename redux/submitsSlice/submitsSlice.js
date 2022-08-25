import { createSlice } from '@reduxjs/toolkit';

export const submitsSlice = createSlice({
  name: 'submits',
  initialState: {
    list: [],
  },
  reducers: {
    sumbit: (state, action) => {
      const newSumbit = action.payload;
      state.list.push(newSumbit);
    },
  },
});

// Action creators are generated for each case reducer function
export const { sumbit, removeSumbit } = submitsSlice.actions;

export default submitsSlice.reducer;
