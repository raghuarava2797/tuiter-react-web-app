import React from "react";
import postsArray from './posts.json';
import PostItem from "./post-item";

const PostList = (who) => {
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <PostItem
           key={who._id} post={post}/> )
     }
   </ul>
 );
};
export default PostList;