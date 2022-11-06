import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleLikeButton} from "../tuits-reducer"
import '@fortawesome/fontawesome-free/css/all.css';

const TuitStats = ({post}) => {
  const dispatch = useDispatch();
  const toggleLikeButtonHanldler = (index) => {
    dispatch(toggleLikeButton(index))
  }
  return(
    <div class="d-flex justify-content-between">
      <div><a href="#"><i className="bi bi-chat text-black"></i></a><span className="ml-15">{post.replies}</span></div>
      <div><a href="#"><i className="fa-solid fa-repeat text-black cursor-pointer"></i></a><span className="ml-15">{post.retuits}</span></div>
      <div>
        <a onClick={() =>toggleLikeButtonHanldler(post._id)}>
        {
          post.liked ? <i className="bi bi-heart-fill text-danger"></i>:<i className="bi bi-heart text-black"></i>
        }
        </a><span className="ml-15">{post.likes}</span></div>
      <div><a href="#"><i className="bi bi-share text-black"></i></a></div>
  </div>
  );
};
export default TuitStats;