import PostSummaryItem from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                <div class="col-10">
                    <div class="wd-explore">
                        <div class="wd-search ">
                               <i class="fa fa-search pav-searchinput"></i>
                               <input class="w-100 border-1 ps-5 pav-searchinput" type="text" placeholder="Search Twitter" />
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <a href="explore-settings.html"><i class="fas fa-cog fa-2x"></i></a>
                </div>
            </div>
      
           <ul class="nav mb-2 nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div class="image-container mt-2">
                    <img src="../space.jpg" class="img-fluid" alt="Night Sky">
                    <div class="bottom-left fs-1">Lovely Night Sky</div>
            </div>
           <!-- image with overlaid text -->
           <div class="basic-coloroveride">  
                ${PostSummaryItem()}
            </div>
    `);
}
export default ExploreComponent;
