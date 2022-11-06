import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowList from "../who-to-follow-list"
import { useNavigate } from "react-router-dom";
import './index.css';

const ProfileComponent  = () => {
  const profileData = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const coursesPage = () => {
    navigate('/tuiter/edit-profile');
  }
    return (
        <div class="row">
          <div class="col-lg-8 col-xl-8">
            <div className="row align-items-center">
              <div className="col-1">
                <i class="bi bi-arrow-left"></i>
              </div>
              <div className="col-11">
                <div className="row">
                    <span className="font-weight-bold">{profileData.firstName}&nbsp;{profileData.lastName}</span>
                </div>
                <div className="row">
                  <span className="text-secondary">{profileData.numberOfTweets}&nbsp;Tweets</span>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <img src={profileData.bannerPicture} className="w-100"></img>
            </div>

            <div className="d-flex justify-content-between mt-10">
              <div className="float-left">
                {/* <img className="rounded-circle w-50" src={profileData.profilePicture}></img> */}
                <div className="position-relative">
                  <img src={`/images2/${profileData.profilePicture}`} className="w-200 rounded-circle wd-profile-avatar-format position-absolute wd-profile-avatar-margins"/>
                  </div>
              </div>
              <div className="float-right">
                    <button onClick={coursesPage} className="mr-20 rounded-pill btn btn-outline-secondary text-black font-weight-bold">Edit profile</button>
              </div>
            </div>

            <div className="d-flex flex-column ml-20 mt-30">
              <div className="row">
                <span className="font-weight-bold fs-20">{profileData.firstName}&nbsp;{profileData.lastName}</span>
                <br></br>
                <span className="text-secondary">{profileData.handle}</span>
              </div>
              <div className="d-flex mt-10">
                <p>{profileData.bio}</p>
              </div>
              <div className="d-flex">
                <div>
                  <span><i class="bi bi-geo-alt"></i></span>
                  <span className="text-secondary p-2">{profileData.location}</span>
                </div>
                <div>
                  <span><i class="bi bi-balloon p-2"></i></span>
                  <span className="text-secondary pr-2">Born &nbsp;{profileData.dateOfBirth}</span>
                </div>
                <div>
                  <span><i class="bi bi-calendar3 p-2"></i></span>
                  <span className="text-secondary">{profileData.dateJoined}</span>
                </div>
              </div>

              <div className="d-flex mt-10">
                  <div className="pr-3">
                    <span className="font-weight-bold">{profileData.followingCount}</span>
                    <span className="text-secondary">&nbsp;Following</span>
                  </div>
                  <div>
                    <span className="font-weight-bold">{profileData.followersCount}</span>
                    <span className="text-secondary">&nbsp;Followers</span>
                  </div>
              </div>

              </div>

          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
    );
   };
export default ProfileComponent;