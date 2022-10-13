import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return (`
            <div class="row">
        <div id="feed-content-section">
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <div class="input-group border rounded-pill">
                    <span class="input-group-text bg-transparent border-0">
                    <i class="fa-solid fa-magnifying-glass pl-10"></i> </span>
                    <input type="text" placeholder="Search Tuiter" id="wd-search-input" class="form-control border-0 bg-transparent" title="Search" />
                    </div>
                </div>
                <div class="ml-25">
                    <a href="explore-settings.html "><i class="fa fa-cog fa-2x text-primary"></i></a>
                </div>
            </div>
        </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html" data-bs-target="#for-you" type="button">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html" data-bs-target="#trending-panel" type="button">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html" data-bs-target="#news-panel" type="button">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html" data-bs-target="#sports-panel" type="button">Sports</a>
        </li>
        <li class="nav-item d-sm-none d-md-block">
            <a class="nav-link d-none d-lg-inline" href="entertainment.html" data-bs-target="#entertainment-panel" type="button">Entertainment</a>
        </li>
        </ul>
        <div class="tab-content mt-2">
        <div class="tab-pane fade show active" id="for-you-panel" role="tabpanel" aria-labelledby="home-tab" type="button">
            <img src="../../images/spacex-starship.jpg" class="w-100" />
            <div class="overlay-img-text">
                <span class="text-white h1 font-weight-bold">SpaceX's Starship</span>
            </div>
        </div>
        </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;