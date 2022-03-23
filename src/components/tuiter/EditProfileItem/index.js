import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const EditProfileItem = () => {
    const profile = useSelector(state => state.profile);
    let [name, setName]
        = useState(profile.firstName + ' ' +profile.lastName);
    let [bio, setBio]
        = useState(profile.bio);
    const dispatch = useDispatch();
    const dispatchSaveData = () => {
        dispatch({type: 'edit-profile', name, bio});
    }
    return(
        <>
            <div className="row mb-2">
                <div className="col-2 d-flex align-items-center">
                    <div>
                    <Link to="/tuiter/profile" style={{'color': 'white'}}><i class="fas fa-times fa-1x"></i></Link>
                    </div>
                </div>
                <div className="col-6 d-flex align-items-end">
                    <div style={{fontSize: "1.5em", color: 'white'}}>
                    Edit Profile
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <button className="btn btn-warning rounded-pill btn-block" onClick={dispatchSaveData}>
                    Save
                    </button>
                </div>
                
            </div>
            <div>
            <img src={profile.bannerPicture} height="200px" width="100%" alt="none" /> 
            </div>
            <div style={{position: 'absolute', height: '1px'}}>
            <img alt="none" style={{position: 'relative', top: "-80px", left: "10px", height: '9em', borderRadius: '50%', borderColor: 'black', borderWidth: '5px', borderStyle: 'solid'}} src={profile.profilePicture} />
            </div>
            <br/>
            <br/>
            <div className="form-group mt-4">
            <label for="Name">Name</label>
            <input type="text" class="form-control" id="Name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="form-group mt-4">
            <label for="Bio">Bio</label>
            <textarea class="form-control" id="Bio" value={bio} onChange={(event) => setBio(event.target.value)}/>
            </div>
        </>
    );   
}

export default EditProfileItem;