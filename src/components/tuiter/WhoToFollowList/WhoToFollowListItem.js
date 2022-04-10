import React from "react";
const WhoToFollowListItem = ({
    who = {
        avatarIcon: "../tuiter4/java.jpg",
        userName: "Java", 
        handle: "Java" ,
        _id: "dreamwho1"
    }
    }) => {
        
    return (
        
    <li className="list-group-item">
        <div className="row">
            <div className="col-3"><img src={who.avatarIcon} alt={who.userName} className="img-fluid rounded-circle basic-image" /></div>
            <div className="col-5">
                <div><span className="fw-bold pe-2">{who.userName}</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                            <path
                                d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                    </span>
                </div>
                <div>@{who.handle}</div>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center"><button type="button"
                                    className="btn btn-primary w-100 basic-follow">Follow</button></div>
        </div>
    </li>

    );
}

export default WhoToFollowListItem;

// https://i.ibb.co/MCCMWGX/java.jpg

