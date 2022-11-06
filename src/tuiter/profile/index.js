import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowList from "../who-to-follow-list"
import { useNavigate } from "react-router-dom";

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
            <div className="row">
              <div className="col-9">
                <img className="rounded-circle w-50" src={profileData.profilePicture}></img>
              </div>
                
              <div className="col-3">
                    <button onClick={coursesPage} className="rounded-pill btn btn-outline-secondary text-black font-weight-bold">Edit profile</button>
              </div>
            </div>
              <div className="row">
                <h5>{profileData.firstName}&nbsp;{profileData.lastName}</h5>
                <br></br>
                <span>{profileData.handle}</span>
              </div>
              <div className="row">
                <p>{profileData.bio}</p>
              </div>
              <div className="d-flex">
                <div>
                  <span><i class="bi bi-geo-alt"></i></span>
                  <span>{profileData.location}</span>
                </div>
                <div>
                  <span><i class="bi bi-balloon"></i></span>
                  <span>{profileData.dateOfBirth}</span>
                </div>
                <div>
                  <span><i class="bi bi-calendar3"></i></span>
                  <span>{profileData.dateJoined}</span>
                </div>
              </div>

              <div className="d-flex">
                  <div>
                    <span className="font-weight-bold">{profileData.followingCount}</span>
                    <span>&nbsp;Following</span>
                  </div>
                  <div>
                    <span className="font-weight-bold">{profileData.followersCount}</span>
                    <span>&nbsp;Followers</span>
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