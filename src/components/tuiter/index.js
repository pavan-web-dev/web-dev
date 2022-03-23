import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import "./index.css";
import whoReducer from "./reducers/who-reducer";
import postReducer from "./reducers/post-reducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import postSummaryReducer from "./reducers/post-summary-reducer";
import profileReducer from "./reducers/profile-reducer";

import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
const reducer = combineReducers({
    posts: postReducer, who: whoReducer, postssummary: postSummaryReducer, profile: profileReducer
})


const store = createStore(reducer);

const Tuiter = () => {
    const location = useLocation();
    let navname = location.pathname.split('/')[2]
    
    return(
        <>
        <Provider store={store}>

            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active = {navname}/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                  <Outlet/>
                 </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>

            </div>
            </Provider>
        </>
    )
};

export default Tuiter;
