import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  var active = paths[2];
  if (!paths[2]) {
    active = "home"
  }
 return (
   <div className="list-group">
     <a className="list-group-item">Tuiter</a>
     <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                      <i class="bi bi-house-door-fill"></i>
                      <span>&nbsp;Home</span>
       
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                      <i class="bi bi-hash"></i>
                      <span>&nbsp;Explore</span>
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                       <i class="bi bi-bell"></i>
                      <span>&nbsp;Notifications</span>
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                       <i class="bi bi-envelope"></i>
                      <span>&nbsp;Messages</span>
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                       <i class="bi bi-bookmark"></i>
                      <span>&nbsp;Bookmarks</span>
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                       <i class="bi bi-card-checklist"></i>
                      <span>&nbsp;Lists</span>
     </Link>
     <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                      <i class="bi bi-person-fill"></i>
                      <span>&nbsp;Profile</span>
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                      <i class="bi bi-three-dots"></i>
                      <span>&nbsp;More</span>
     </Link>
   </div>
 );
};
export default NavigationSidebar;
