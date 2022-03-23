import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({
    active = 'explore'
}) => {
    
    return(
            <>
            <div className="list-group">
                <Link className="list-group-item" to="/">
                    <i className="fab fa-twitter"></i></Link>

                    <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`} >
                    <i className="fas fa-home"></i>
                    <span className="d-none d-xl-inline ps-2">Home</span>
                    </Link>

                    <Link className={`list-group-item ${active === 'explore' ? 'active' : ''}`} to="/tuiter/explore">
                    <i className="fas fa-hashtag"></i>
                    <span className="d-none d-xl-inline ps-2">Explore</span>
                    </Link>

                    <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} href="/">
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline ps-2">Notifications</span>
                    </a>

                    <a className={`list-group-item ${active === 'message' ? 'active' : ''}`} href="/">
                    <i className="fas fa-envelope"></i>
                    <span className="d-none d-xl-inline ps-2">Messages</span>
                    </a>
                    

                    <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href="/">
                    <i className="fas fa-bookmark"></i>
                    <span className="d-none d-xl-inline ps-2">Bookmarks</span>
                    </a>
                    

                    <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="/">
                    <i className="fas fa-list"></i>
                    <span className="d-none d-xl-inline ps-2">Lists</span>
                    </a>
                    

                    <Link className={`list-group-item ${active === 'profile' ? 'active' : ''}`} to="/tuiter/profile">
                    <i className="fas fa-user"></i>
                    <span className="d-none d-xl-inline ps-2">Profile</span>
                    </Link>
                    

                    <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="/">
                    <i className="fas fa-circle"></i>
                    <span className="d-none d-xl-inline ps-2">More</span>
                    </a>
                    
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            </>
    );
}
export default NavigationSidebar;
