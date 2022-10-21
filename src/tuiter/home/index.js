import React from "react";
import PostList from "../post-list";
import PostSummaryList from "../post-summary-list"
import "./index.css";
const HomeComponent = () => {
 return(
   <>
        <div class="row">
          <div class="col-lg-8 col-xl-8">
            <PostList/>
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <PostSummaryList/>
          </div>
        </div>
   </>
 );
};
export default HomeComponent;