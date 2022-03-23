import React from "react";
import { useDispatch } from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
      };
    return(
        <div className="row mt-2">
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <i className="far fa-comment"></i>
                    <div className="ps-3">{tuit.num_comment}</div>
                </div>
                <div className="col-3 d-flex justify-start align-items-center justify-content-center">
                    <i className="fas fa-retweet"></i>
                    <div className="ps-3">{tuit.num_retweet}</div>
                </div>
                
                <div className="col-3 d-flex justify-start align-items-center justify-content-center">
                <span onClick={likeTuit}>
                    {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                        style={{color: 'red'}}></i>
                    }
                    {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                    }
                </span>
                    <div className="ps-3">{tuit.num_likes}</div>
                </div>

                <div className="col-3 d-flex align-items-center justify-content-center">
                    <i className="fas fa-upload"></i>
                </div>
            </div>
    )
}

export default TuitStats;