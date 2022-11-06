import React from "react";
import {useSelector} from "react-redux";
// import PostSummaryItem from "./tuit-item";
import TuitItem from "./tuit-item";

const TuitsList = (who) => {
  const postsArray = useSelector(state => state.tuits)
  return(
    <ul className="list-group">
      {
        postsArray.map(post =>
          <TuitItem
            key={who._id} post={post}/> )
      }
    </ul>
  );
};
export default TuitsList;