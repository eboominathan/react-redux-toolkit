import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Dude  Leboski" },
  { id: 1, name: "Dave Gray" },
  { id: 2, name: "Boominathan" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    
  },
});

 
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
