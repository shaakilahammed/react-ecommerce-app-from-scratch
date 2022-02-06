import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'admin',
    email: 'admin@admin',
  },
  reducers: {
    update: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
  },
});

export const { update, remove } = userSlice.actions;
export default userSlice.reducer;
