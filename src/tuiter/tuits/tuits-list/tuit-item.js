import React from "react";
import TuitStats from "../tuits-stats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../tuits-reducer"
import { deleteTuitsThunk } from "../../../services/tuits-thunks";

const TuitItem = ({post}) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuitsThunk(id));
}
 return(
      <li className="list-group-item">
        <div className="row">
            <div className="col-auto">
              <img width={50}
                  className="float-end rounded-circle"
                  src={`/images/${post.image}`}/>
            </div>
            <div className="col-10">
              <div>
                  <i className="bi bi-x-lg float-end"
                    onClick={() => deleteTuitHandler(post._id)}></i>
                  <div className="d-flex">
                    <span className="h7 font-weight-bold">{post.userName}</span>
                    <span><i className="fa-solid fa-circle-check ml-5 wd-color-light-blue"></i></span>
                    <span className="text-secondary pl-5">{post.handle}</span>
                    <span className="text-secondary">&nbsp;&#183;&nbsp;{post.time}</span>
                  </div>
                  <div className="row">
                    <p>
                        {post.tuit}
                    </p>
                  </div>
                  <div className="row col-10">
                    <TuitStats post={post}></TuitStats>
                  </div>
              </div>
            </div>
        </div>
      </li>

    // <li className="list-group-item">
    //   <div className="d-flex">
    //     <div>
    //       <img src={post.image} width="48px" className="rounded-circle"/>
    //     </div>
    //     <div className="d-flex flex-column pl-16">
    //         <i className="bi bi-x-lg float-end"
    //         onClick={() => deleteTuitHandler(post._id)}></i>
    //         <div className="d-flex">
    //               <span className="h7 font-weight-bold">{post.userName}</span>
    //               <span><i className="fa-solid fa-circle-check ml-5 wd-color-light-blue"></i></span>
    //               <span className="text-secondary pl-5">{post.handle}</span>
    //               <span className="text-secondary">&nbsp;&#183;&nbsp;{post.time}</span>
    //         </div>
    //         <div className="row">
    //             <p>
    //               {post.tuit}
    //             </p>

    //         </div>
    //         <div className="row col-10">
    //             <TuitStats post={post}></TuitStats>
    //         </div>
    //     </div>

    //   </div>
    // </li>
 );
};
export default TuitItem;