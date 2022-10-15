const NavigationSidebar = (active) => {
    return (`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
            <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}">
                <i class="fa fa-solid fa-house"></i><span class="d-none d-xl-inline">&nbsp;Home</span></a>
            <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}">
                <i class="fa-solid fa-hashtag"></i><span class="d-none d-xl-inline">&nbsp;Explore</span></a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}">
                <i class="fa-solid fa-bell"></i> <span class="d-none d-xl-inline">&nbsp;Notifications</span></a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}">
                <i class="fa-solid fa-envelope"></i><span class="d-none d-xl-inline">&nbsp;Messages</span></a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}">
                <i class="fa-solid fa-bookmark"></i><span class="d-none d-xl-inline">&nbsp;Bookmarks</span></a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}">
                <i class="fa-solid fa-list"></i><span class="d-none d-xl-inline">&nbsp;Lists</span></a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}">
                <i class="fa-solid fa-user"></i><span class="d-none d-xl-inline">&nbsp;Profile</span></a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}">
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-ellipsis text-white custom-ellipse"></i> <span class="d-none d-xl-inline">&nbsp;More</span></a>
            </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
}
export default NavigationSidebar;