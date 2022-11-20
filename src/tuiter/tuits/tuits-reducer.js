import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, deleteTuitsThunk, findTuitsThunk, updateTuitThunk } from "../../services/tuits-thunks";
import tuits from './tuits.json';

const initialState = {
  tuits: [],
  loading: false
}
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../images/nasa_logo.png",
};
   
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers:{
      [findTuitsThunk.pending]:
       (state) =>  {
          state.loading = true
          state.tuits = []
       },
       [findTuitsThunk.fulfilled]:
        (state, {payload}) => {
            state.loading = false
            state.tuits = payload
        },
        [findTuitsThunk.rejected]:
          (state) => {
            state.loading = false
            state.tuits = []
          },
        [deleteTuitsThunk.fulfilled]:
         (state, {payload}) => {
            state.loading = false
            state.tuits = state.tuits
                .filter(t => t._id !== payload)
         },
         [createTuitThunk.fulfilled]:
          (state, {payload}) => {
            state.loading = false;
            state.tuits.push(payload);
          },
        [updateTuitThunk.fulfilled]:
         (state, { payload }) => {
            state.loading = false
            const tuitNdx = state.tuits.findIndex((t) => t._id == payload._id)
            state.tuits[tuitNdx] = {
              ...state.tuits[tuitNdx],
              ...payload
            }
         }
    },
    reducers: {
        deleteTuit(state, action) {
          const index = state
            .findIndex(tuit =>
                tuit._id === action.payload);
          state.splice(index, 1);
        },
        createTuit(state, action) {
          state.unshift({
            ...action.payload,
            ...templateTuit,
            _id: (new Date()).getTime(),
          })
        },
        toggleLikeButton(state, action) {
          const index = state
            .findIndex(tuit =>
                tuit._id === action.payload);
          state[index]["liked"] = !state[index]["liked"]
          if(state[index]["liked"] == true) {
            state[index]["likes"] = state[index]["likes"] + 1;
          } else {
            state[index]["likes"] = state[index]["likes"] - 1;
          }
        }
      }
});
export const {createTuit, deleteTuit , toggleLikeButton} = tuitsSlice.actions;
export default tuitsSlice.reducer;