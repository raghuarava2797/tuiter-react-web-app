import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json'

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
          console.log(action.payload)
          return {
            ...action.payload,
          }
        },
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;