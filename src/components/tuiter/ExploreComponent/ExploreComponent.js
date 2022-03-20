import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-10">
                    <div className="wd-explore">
                        <div className="wd-search ">
                               <i className="fa fa-search pav-searchinput"></i>
                               <input className="w-100 border-1 ps-5 pav-searchinput" type="text" placeholder="Search Twitter" />
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <a href="explore-settings.html"><i className="fas fa-cog fa-2x"></i></a>
                </div>
            </div>
      
           <ul className="nav mb-2 nav-tabs mt-2">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div className="image-container mt-2">
                    <img src="https://i.ibb.co/YQs7MJV/space.jpg" className="img-fluid" alt="Night Sky" />
                    <div className="bottom-left fs-1">Lovely Night Sky</div>
            </div>
           
           <div className="basic-coloroveride">  
                <PostSummaryList />
            </div>
            </>
    );
}

export default ExploreComponent;
