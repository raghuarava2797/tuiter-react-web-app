const PostItem = (post) => {
    return (`
         <li class="list-group-item bg-transparent border-0">
            <div class="d-flex">
                <div>
                    <img src="${post.logoIcon}" width="48px" width="48px" class="rounded-circle"/>
                </div>
                <div class="d-flex flex-column pl-16">
                    <div>
                        <span class="h7">${post.userName}</span>
                        <span><i class="fa-solid fa-circle-check ml-5"></i></span>
                        <span class="wd-color-light-grey">${post.handle}</span>
                        <span class="wd-color-light-grey">&nbsp;&#183;&nbsp;${post.time}</span>
                    </div>
                    <div class="row">
                        <span>${post.postDescription}</span>
                    </div>
                    <div class="mt-3">
                        <div class="card bg-transparent wd-border-grey br-25">
                            <img class="card-img-top br-25 ${post.imageDescriptionAvailable == true ? 'br-btm-0' : ''}" src="${post.postImage}">
                            <div class="${post.imageDescriptionAvailable == true ? "" : 'd-none'}">
                                <div class="wd-border-btm-grey"></div>
                                <div class="card-body">
                                    <span class="card-title">${post.postHeader}</span>
                                    <p class="card-text wd-color-light-grey">${post.imageDescription}</p>
                                    <a href="${post.externalLink}" class="text-decoration-none wd-color-light-grey">${post.externalLink}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-3 wd-color-grey">
                        <div>
                            <a href="#"><i class="fa-solid fa-message wd-color-grey"></i></a>
                            <span class="wd-ml-12">${post.commentsCount}</span>
                        </div>
                        <div>
                            <a href="#"><i class="fa-solid fa-repeat wd-color-grey"></i></a>
                            <span class="wd-ml-12">${post.retweetCount}</span>
                        </div>
                        <div>
                            <a href="#"><i class="fa-solid fa-heart wd-color-grey"></i></a>
                            <span class="wd-ml-12">${post.likeCount}</span>
                        </div>
                        <div>
                            <a href="#"><i class="fa-solid fa-upload wd-color-grey"></i></a>
                        </div>
                    </div>

                </div>
            </div>
         </li>
    `);
}

export default PostItem;