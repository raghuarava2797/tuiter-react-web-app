import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../../services/tuits-thunks.js";
// import PostSummaryItem from "./tuit-item";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispath = useDispatch();
  useEffect(() =>{
    dispath(findTuitsThunk())
  }, [])
  console.log(tuits)
  return(
    <ul className="list-group">
    {
      loading ?
      <li className="list-group-item">
        Loading...
      </li>
      :
      tuits.map(post =>
        <TuitItem key={post._id} post={post}/>)
    }
    </ul>
  );
};
export default TuitsList;