import React from "react";

const PostSummaryItem = ({
    post = { topic: "Web Development", 
    userName: "ReactJS", 
    time: "2h", 
    title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs", 
    image: "https://i.ibb.co/VpNJvJH/react-logo.png",
    _id: "summaryid1"}
}) => {

    return (
    <>
    <div className="col-9">
        {post.topic ? <div className="text-muted">{post.topic}</div> : ''}
        <div>
            <span className="fw-bold pe-2">{post.userName}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-patch-check-fill mb-1" viewBox="0 0 16 16">
                    <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
            </span>
            <span className="text-muted">
                - {post.time}
            </span>
            <p className="fw-bold basic-removepadding">
                {post.title}
            </p>
            {/* {`${post.tweets ? '<p className="text-muted">{post.tweets} Tweets</p>':''}`} */}
            {post.tweets && <p className="text-muted">{post.tweets} Tweets</p>}
        </div>
    </div>
    <div className="col-3 d-flex flex-wrap align-items-center">
        <img src={post.image} className="img-fluid rounded basic-summary-image" alt={post.userName} />
    </div>
    </>
    )
}

export default PostSummaryItem;
