import React from "react";

import PostList from "../PostListHome/index.js";

import WhatsHappening from "../WhatsHappening/whats-happening.js";

import './homescreen.css';

const HomeScreenProf = () => {
    return (
        <>
                <WhatsHappening/>
                <PostList />

        </>
    )
}

export default HomeScreenProf;