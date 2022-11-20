import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {toggleLikeButton} from "../tuits-reducer"
import { updateTuitThunk } from "../../../services/tuits-thunks";
import '@fortawesome/fontawesome-free/css/all.css';

const TuitStats = ({post}) => {
  const dispatch = useDispatch();
  const toggleLikeButtonHanldler = (tuit) => {
    dispatch(updateTuitThunk({
      ...tuit,
      liked: !tuit.liked,
      likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1
    }))
  }
  const toggleDisLikeButtonHanldler = (tuit) => {
    dispatch(updateTuitThunk({
      ...tuit,
      disliked: !tuit.disliked,
      dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1
    }))
  }
  return(
    <div class="d-flex justify-content-between">
      <div><a href="#"><i className="bi bi-chat text-black"></i></a><span className="ml-15">{post.replies}</span></div>
      <div><a href="#"><i className="fa-solid fa-repeat text-black cursor-pointer"></i></a><span className="ml-15">{post.retuits}</span></div>
      <div>
          <a onClick={() =>toggleLikeButtonHanldler(post)}>
          {
            post.liked ? <i className="bi bi-heart-fill text-danger"></i>:<i className="bi bi-heart text-black"></i>
          }
          </a>
          <span className="ml-15">{post.likes}</span>
      </div>
      <div>
            <a onClick={() =>toggleDisLikeButtonHanldler(post)}>
            {
              post.disliked ? <i class="bi bi-hand-thumbs-down text-primary"></i>:<i className="bi bi-hand-thumbs-down"></i>
            }
            </a>
            <span className="ml-15">{post.dislikes}</span>
      </div>
    <div><a href="#"><i className="bi bi-share text-black"></i></a></div>
  </div>
  );
};
export default TuitStats;