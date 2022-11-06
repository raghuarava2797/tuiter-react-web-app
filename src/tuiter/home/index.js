import React from "react";
// import PostList from "../post-list";
import TuitsList from "../tuits/tuits-list";
// import PostSummaryList from "../post-summary-list"
import WhoToFollowList from "../who-to-follow-list"
import WhatsHappening from "./whats-happening";
import "./index.css";
const HomeComponent = () => {
 return(
   <>
        <div class="row">
          <div class="col-lg-8 col-xl-8">
            <h3>Home</h3>
            <WhatsHappening/>
            <TuitsList/>
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
   </>
 );
};
export default HomeComponent;