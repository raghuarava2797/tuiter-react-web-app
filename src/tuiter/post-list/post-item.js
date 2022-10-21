import React from "react";
import Parser from 'html-react-parser';
import '@fortawesome/fontawesome-free/css/all.css';

const PostItem = (
 {
   post = {}
}
) => {
 return(
      <li className="list-group-item bg-transparent br-0">
        {post.retweetedFlag === true ?
            <div class="row m-2 ml-20">
                <span>
                    <i className="fa-solid fa-repeat wd-color-grey"></i>
                    <span className="pl-10 font-weight-bold wd-color-grey fs-15">Elon Musk Retweeted</span>
                </span>
            </div>
        :
            <></>
        }
           
      <div className="d-flex">
          <div>
              <img src={post.logoIcon} width="48px" className="rounded-circle"/>
          </div>
          <div className="d-flex flex-column pl-16">
              <div className="d-flex">
                  <div className="flex-grow-1">
                      <span className="h7 font-weight-bold">{post.userName}</span>
                      <span><i className="fa-solid fa-circle-check ml-5 wd-color-light-blue"></i></span>
                      <span className="text-secondary pl-5">{post.handle}</span>
                      <span className="text-secondary">&nbsp;&#183;&nbsp;{post.time}</span>
                  </div>
                  <div>
                      <i className="fa-solid fa-ellipsis text-secondary"></i>
                  </div>
              </div>
              <div className="row">
                  <span>{Parser(post.postDescription)}</span>
              </div>
              <div className="mt-3">
                <div className="card bg-transparent wd-border-grey br-25">
                    {post.subTweetFlag === true ? 
                        <div className="m-3">
                        <div className="d-flex">
                            <div>
                                <img src={post.subTweetLogoIcon} width="30px" className="rounded-circle"/>
                            </div>
                            <div className="d-flex flex-column pl-5">
                            <div className="d-flex">
                                <div className="flex-grow-1">
                                    <span className="h7 font-weight-bold">{post.subTweetUserName}</span>
                                    <span><i className="fa-solid fa-circle-check ml-5"></i></span>
                                    <span className="text-secondary">{post.subTweetHandle}</span>
                                    <span className="text-secondary">&nbsp;&#183;&nbsp;{post.subTweetTime}</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-ellipsis text-secondary"></i>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                        <div className="row">
                        <p>{Parser(post.subTweetpostDescription)}</p>
                    </div>
                    </div>
                    :
                        <>
                        <img className={`card-img-top br-25 ${post.imageDescriptionAvailable ? "br-btm-0" : ""}`} src={post.postImage}/>
                        <div className={post.imageDescriptionAvailable == true ? "" : 'd-none'}>
                            <div className="wd-border-btm-grey"></div>
                            <div className="card-body">
                                <span className="card-title">{post.postHeader}</span>
                                <p className="card-text text-secondary m-0">{post.imageDescription}</p>
                                <a href={post.externalLink} className="text-decoration-none text-secondary"><i className="fa-solid fa-link"></i>&nbsp;{post.externalLink}</a>
                            </div>
                        </div>
                        </>
                    }
                  </div>
              </div>
              <div className="d-flex justify-content-between m-3 wd-color-grey">
                  <div>
                      <a href="#"><i className="fa-solid fa-message wd-color-grey"></i></a>
                      <span className="ml-15">{post.commentsCount}</span>
                  </div>
                  <div>
                      <a href="#"><i className="fa-solid fa-repeat wd-color-grey"></i></a>
                      <span className="ml-15">{post.retweetCount}</span>
                  </div>
                  <div>
                      <a href="#"><i className="fa-solid fa-heart wd-color-grey"></i></a>
                      <span className="ml-15">{post.likeCount}</span>
                  </div>
                  <div>
                      <a href="#"><i className="fa-solid fa-upload wd-color-grey"></i></a>
                  </div>
              </div>
              {post.showThisThreadFlag === true ?
                    <div class="row m-3">
                        <a href='#' class='text-decoration-none wd-color-light-blue p-0'>Show this thread</a>
                    </div>
                :
                    <></>
                }

          </div>
      </div>
     
           
    </li>
 );
};
export default PostItem;