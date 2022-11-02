import React from "react";
// import postsArray from './posts.json';
import {useSelector} from "react-redux";
import PostSummaryItem from "./tuit-item";

const PostSummaryList = (who) => {
  const postsArray = useSelector(state => state.tuits)
  return(
    <ul className="list-group">
      {
        postsArray.map(post =>
          <PostSummaryItem
            key={who._id} post={post}/> )
      }
    </ul>
  );
};
export default PostSummaryList;