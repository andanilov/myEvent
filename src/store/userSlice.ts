import { createSlice } from '@reduxjs/toolkit';
import IUser from '../model/user';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {} as IUser,
  },
  reducers: {
    setUser: (state, action) => { state.user = action.payload; },
  }
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
