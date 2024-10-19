import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  user: null,
  initDataUnsafe: null,
  tg: null,
  tgUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setTg(state, action) {
      state.tg = action.payload;
    },
    setInitDataUnsafe(state, action) {
      state.initDataUnsafe = action.payload;
    },
    setTgUser(state, action) {
      state.tgUser = action.payload;
    },
  },
});

export default userSlice.reducer;
