const WhoToFollowListItem = (who) => {
    return (`
       <div class="list-group-item">
          <div class="d-flex align-items-center">
             <div class="flex-grow-1">
                <div class="d-flex align-items-center">
                   <div>
                      <img src="${who.avatarIcon}" width="48px " height="48px " class="rounded-circle"></span>
                   </div>
                   <div class="align-self-center flex-grow-1 ml-10">
                      <div class="d-flex font-weight-bold">${who.userName}</span>
                         <span><i class="fa-solid fa-circle-check ml-5"></i></span>
                      </div>
                      <div class="d-flex">${who.handle}</div>
                   </div>
                </div>
             </div>
             <div>
                <button class="btn btn-primary rounded-pill">Follow</button>
             </div>
          </div>
       </div>
     `);
}
export default WhoToFollowListItem;