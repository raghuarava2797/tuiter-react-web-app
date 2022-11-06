import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";
const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}});

function Tuiter() {
 return (
  <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="home"/>
        </div>
        <div className="col-10 col-md-10 col-lg-10 col-xl-10"
              style={{"position": "relative"}}>
          <Routes>
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="home" element={<HomeComponent/>}/>
            <Route path="explore" element={<ExploreComponent/>}/>
            <Route path="profile" element={<ProfileComponent/>}/>
            <Route path="edit-profile" element={<EditProfile/>}/>
          </Routes>
        </div>
      </div>
  </Provider>
 );
}

export default Tuiter;