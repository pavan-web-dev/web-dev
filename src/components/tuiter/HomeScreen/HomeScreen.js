import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostListHome/index.js";

import WhatsHappening from "../WhatsHappening/whats-happening.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import './homescreen.css';

const HomeScreen = () => {
    return (
        <>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 mt-2">
                <NavigationSidebar active = 'home' />
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <WhatsHappening/>
                <PostList />
                <br/>
                <br/>
                <br/>

            </div>
            <div className="d-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <div style={{"paddingTop":"0px"}}>    
                <WhoToFollowList />
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeScreen;