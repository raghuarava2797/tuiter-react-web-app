import React from "react";
import {useDispatch} from "react-redux";
import WhoToFollowList from "../who-to-follow-list"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import {updateProfile} from '../profile/profile-reducer'
import { useSelector } from 'react-redux'
import './index.css';

const EditProfile = () => {
    const navigate = useNavigate();
    const updateDataOfBirth = (dob) => {
        var fields = dob.split("/")
        var finaldob = "";
        finaldob += (fields[2] + "-");
        if(!dob) {
            return "";
        }
        if(parseInt(fields[0]) < 10) {
            finaldob += ("0" + fields[0]) + "-"
        } else {
            finaldob += fields[1] + "-"
        }
        if(parseInt(fields[1]) < 10) {
            finaldob += ("0" + fields[1])
        } else {
            finaldob += fields[1]
        }
        return finaldob.trim();
    }
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
    const [dateOfBirth, setdateOfBirth] = useState(updateDataOfBirth(profile.dateOfBirth));
    const [dateJoined, setdateJoined] = useState(profile.dateJoined);
    const [followingCount, setfollowingCount] = useState(profile.followingCount);
    const [followersCount, setfollowersCount] = useState(profile.followersCount);
    const [numberOfTweets, setNumberOfTweets] = useState(profile.numberOfTweets);
    
    console.log(dateOfBirth)
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
            <div className="postion-absolute">  
                <div className="row align-items-center font-weight-bold">
                    <div className="col-1">
                        <a onClick={() =>closeEditProfile()}><i class="fs-25 bi bi-x"></i></a>
                    </div>
                    <div className="col-9">
                        <span>Edit Profile</span>
                    </div>
                    <div className="col-2">
                        <button onClick={() =>updateProfileData()} className="btn rounded-pill bg-black text-white font-weight-bold">Save</button>
                    </div>
                </div>
            </div>
            <div className="d-flex">
              <img src={bannerPicture} className="w-100 img-banner"></img>
            </div>
            <div className="d-flex justify-content-between mt-10">
              <div className="float-left">
                <div className="position-relative">
                  <img src={`/images2/${profilePicture}`} className="img-profile w-200 rounded-circle wd-profile-avatar-format position-absolute wd-profile-avatar-margins"/>
                  </div>
              </div>
            </div>

            <div className="d-flex flex-column mt-35 p-2">
            <div className="d-flex">
                <div class="form-floating mb-3 w-100">
                    <input type="text" class="form-control" id="name-input" placeholder="eg. Jose" onChange={e => setName(e.target.value)} defaultValue={name}/>
                    <label for="name-input">Name</label>
                </div>
            </div>
            <div className="d-flex">
                <div class="form-floating mb-3 w-100">
                    <textarea class="form-control" placeholder="Bio" id="bioInput" defaultValue={bio} onChange={e => setbio(e.target.value)}></textarea>
                    <label for="bioInput">Bio</label>
                </div>
            </div>
            <div className="d-flex">
                <div class="form-floating mb-3 w-100">
                    <input type="text" class="form-control" id="locationInput" placeholder="Location" defaultValue={location} onChange={e => setlocation(e.target.value)}/>
                    <label for="locationInput">Location</label>
                </div>
            </div>
            <div className="d-flex">
                <div class="form-floating mb-3 w-100">
                    <input type="text" class="form-control" id="websiteInput" placeholder="Website" defaultValue={website} onChange={e => setwebsite(e.target.value)}/>
                    <label for="websiteInput">Website</label>
                </div>
            </div>
            <div className="d-flex flex-column mt-15">
                <label for="birthday" className="text-secondary birthday-label">Birth date <span className="text-primary">Edit</span></label>
                <input type="date" id="birthday" name="birthday" defaultValue={dateOfBirth} onChange={e => setdateOfBirth(e.target.value)}/>
            </div>
            <div className="d-flex justify-content-between mt-15">
                <div className="mr-auto">
                    <span>Switch to professional</span>
                </div>
                <div>
                    <i class="bi bi-chevron-right"></i> 
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

export default EditProfile;