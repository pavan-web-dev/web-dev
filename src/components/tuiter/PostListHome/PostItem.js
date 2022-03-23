import React from "react";
import TuitStats from "../TuitStats";

const PostItem = ({
    post = {
        avatar_location: 'https://i.ibb.co/s2kX0bL/yoda.jpg',
        userName: 'Elon Musk',
        handle: 'elonmusk',
        time: '23h',
        title: 'Amazing show about inspiration4x mission!',
        image: 'https://i.ibb.co/pLyt9vw/spacexhelmet.jpg',
        post_title: 'Countdown Inspiration4 Mission to Space | Netflix Official Site',
        post_content: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ....',
        num_comment: '4.2K',
        num_retweet: '3.5K',
        num_likes: '37.5K',
        _id: 'quickId1'
    }
}) => {
    return(
        <>
        <div className="col-2 d-flex justify-content-end">
            <img src={post.avatar_location} alt="dummy_image" className="img-fluid rounded-circle basic-avatar" />
        </div>
        <div className="col-10">
            <div>
                <span className="fw-bold">{post.userName}</span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-patch-check-fill mb-1" viewBox="0 0 16 16">
                    <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
            </span>
            <span className="text-muted"> @{post.handle} - {post.time}</span>
            </div>
            <div>
            {post.title}
            </div>
            <div className="image-container mt-2">
                    <img src={post.image} alt="imageex" className={`img-fluid basic-fullimage${(!post.post_title && !post.post_content) ? '1': ''}`} />
            </div>
            {(post.post_title && post.post_content) ? 
            <div className="basic-posttitle">
                <div className="fw-bold ps-2 pt-2 pe-2">{post.post_title}</div>
                <div className="text-muted ps-2 pb-2 pe-2">{post.post_content}</div>
            </div> : ''}

            {/* <div className="row mt-2">
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <i className="far fa-comment"></i>
                    <div className="ps-3">{post.num_comment}</div>
                </div>
                <div className="col-3 d-flex justify-start align-items-center justify-content-center">
                    <i className="fas fa-retweet"></i>
                    <div className="ps-3">{post.num_retweet}</div>
                </div>
                
                <div className="col-3 d-flex justify-start align-items-center justify-content-center">
                    <i className="far fa-heart"></i>
                    <div className="ps-3">{post.num_likes}</div>
                </div>

                <div className="col-3 d-flex align-items-center justify-content-center">
                    <i className="fas fa-upload"></i>
                </div>
            </div> */}

            <TuitStats tuit = {post} />
            
        </div>
        </>
    );   
}

export default PostItem;