import WhoToFollowListItem from "./WhoToFollowListItem.js";

// import who from "./who.json";
import React from "react";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const whom = useSelector((state) => state.who);
    return (
        <>
            <ul className="list-group">
            <a href="/#" className="list-group-item">
                <span className="d-none d-lg-block bs-bold">Who to follow</span>
            </a>    
            {
            whom.map((item) => {
            return( <WhoToFollowListItem who={item} key={item._id}/> );
        })
            }
    </ul>
    </>
)};

export default WhoToFollowList;