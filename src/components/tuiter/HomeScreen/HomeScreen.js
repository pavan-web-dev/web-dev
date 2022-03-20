import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostListHome/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import './homescreen.css';

const HomeScreen = () => {
    return (
        <>
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2 mt-2">
                <NavigationSidebar active = 'home' />
            </div>
            <div class="col-10 col-md-10 col-lg-7 col-xl-6">
                <PostList />
                <br/>
                <br/>
                <br/>

            </div>
            <div class="d-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <div style={{"paddingTop":"0px"}}>    
                <PostSummaryList />
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeScreen;