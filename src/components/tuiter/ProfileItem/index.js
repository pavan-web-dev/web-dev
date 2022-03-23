import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileItem = () => {
    const profile = useSelector(state => state.profile);
    return(
        <>
            <div className="row">
                <div className="col-2 d-flex align-items-center">
                    <div>
                    <i class="fas fa-arrow-left fa-2x"></i>
                    </div>
                </div>
                <div className="col-10">
                    <h4>
                    {profile.firstName} {profile.lastName}
                    </h4>
                    <div className="text-muted">
                        5M Tweets
                    </div>
                </div>
                
            </div>
            <div>
            <img src={profile.bannerPicture} height="200px" width="100%" alt="none" /> 
            </div>
            <div style={{position: 'absolute'}}>
            <img alt="none" style={{position: 'relative', top: "-80px", left: "10px", height: '9em', borderRadius: '50%', borderColor: 'black', borderWidth: '5px', borderStyle: 'solid'}} src={profile.profilePicture} />
            </div>
            <div className="d-flex justify-content-end mt-3">
                
                <Link to='/tuiter/profile/edit'><button className="btn btn-light rounded-pill" style={{border: 'solid 1px gray'}}>Edit Profile</button></Link>
            </div>
            <div className="mt-4">
                <h5>
                    {profile.firstName} {profile.lastName}
                </h5>
            </div>
            <div className="text-muted">
                @{profile.handle}
            </div>
            <div>
                <p>{profile.bio}</p>
            </div>
            <div className="row">
                <div className="col-3 d-flex align-items-center justify-content-left">
                    <i className="fas fa-search-location"></i>
                    <div className="ps-2">{profile.location}</div>
                </div>
                <div className="col-3 d-flex justify-start align-items-center justify-content-left">
                    <i className="fas fa-birthday-cake"></i>
                    <div className="ps-2">{profile.dateOfBirth}</div>
                </div>
                
                <div className="col-3 d-flex justify-start align-items-center justify-content-left">
                    <i className="far fa-calendar"></i>
                    <div className="ps-2">{profile.dateJoined}</div>
                </div>
            </div>
            <div className="row mt-3">
                 <div className="col-3 d-flex align-items-center justify-content-left">
                    <div>{profile.followingCount} <span className="text-muted">Following</span></div>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-left">
                    <div>{profile.followersCount} <span className="text-muted">Followers</span></div>
                </div>
            </div>

        </>
    );   
}

export default ProfileItem;