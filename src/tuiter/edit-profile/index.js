import React from "react";
import {useDispatch} from "react-redux";
import WhoToFollowList from "../who-to-follow-list"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import {updateProfile} from '../profile/profile-reducer'
import { useSelector } from 'react-redux'

const EditProfile = () => {
    const navigate = useNavigate();
    const profile = useSelector((state) => state.profile);
    const [firstName, setfirstName] = useState(profile.firstName);
    const [lastName, setlastName] = useState(profile.lastName);
    const [name, setName] = useState(profile.firstName + " " + profile.lastName);
    const [handle, sethandle] = useState(profile.handle);
    const [profilePicture, setprofilePicture] = useState(profile.profilePicture);
    const [bannerPicture, setbannerPicture] = useState(profile.bannerPicture);
    const [bio, setbio] = useState(profile.bio);
    const [website, setwebsite] = useState(profile.website);
    const [location, setlocation] = useState(profile.location);
    const [dateOfBirth, setdateOfBirth] = useState(profile.dateOfBirth);
    const [dateJoined, setdateJoined] = useState(profile.dateJoined);
    const [followingCount, setfollowingCount] = useState(profile.followingCount);
    const [followersCount, setfollowersCount] = useState(profile.followersCount);
    const [numberOfTweets, setNumberOfTweets] = useState(profile.numberOfTweets);

    const closeEditProfile = () =>{ 
        navigate('/tuiter/profile');
    };
    const dispatch = useDispatch();
    const updateProfileData = () => {
        const profileData = {
            "firstName": name.split(" ")[0],
            "lastName": name.split(" ")[1],
            "handle": handle,
            "profilePicture": profilePicture,
            "bannerPicture": bannerPicture,
            "bio": bio,
            "website": website,
            "location": location,
            "dateOfBirth": dateOfBirth, 
            "dateJoined": dateJoined,
            "followingCount": followingCount,	
            "followersCount": followersCount,
            "numberOfTweets": numberOfTweets
        };
        dispatch(updateProfile(profileData))
    }
  return(
    <div class="row">
       <div class="col-lg-8 col-xl-8">
            <div className="row align-items-center font-weight-bold">    
                <div className="col-1">
                    <a onClick={() =>closeEditProfile()}><i class="bi bi-x"></i></a>
                </div>
                <div className="col-9">
                    <span>Edit Profile</span>
                </div>
                <div className="col-2">
                    <button onClick={() =>updateProfileData()} className="btn rounded-pill bg-black text-white font-weight-bold">Save</button>
                </div>
            </div>
            <div className="d-flex">
                <div class="form-floating mb-3 w-100">
                    <input type="text" class="form-control" id="name-input" placeholder="eg. Jose" onChange={e => setName(e.target.value)} defaultValue={name}/>
                    <label for="name-input">Name</label>
                </div>
            </div>
            <div className="d-flex">
                <div class="form-floating w-100">
                    <textarea class="form-control" placeholder="Bio" id="bioInput" onChange={e => setName(e.target.value)}>{bio}</textarea>
                    <label for="bioInput">Bio</label>
                </div>
            </div>
            <div className="d-flex">
                <div class="form-floating mb-3 w-100">
                    <input type="text" class="form-control" id="locationInput" placeholder="Location" defaultValue={location} onChange={e => setName(e.target.value)}/>
                    <label for="locationInput">Location</label>
                </div>
            </div>
            <div className="d-flex">
                <div class="form-floating mb-3 w-100">
                    <input type="text" class="form-control" id="websiteInput" placeholder="Website" defaultValue={website} onChange={e => setName(e.target.value)}/>
                    <label for="websiteInput">Website</label>
                </div>
            </div>
            <div className="d-flex">
                <span>Birth date</span> <a href="#" className="text-decoration-none">Edit</a>
            </div>
            <div className="d-flex">
                <span>{dateOfBirth}</span>
            </div>
            <div className="d-flex justify-content-between">
                <div className="mr-auto">
                    <span>Switch to professional</span>
                </div>
                <div>
                    <i class="bi bi-chevron-right"></i> 
                </div>
            </div>
       </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList/>
      </div>
    </div>
  );
};

export default EditProfile;