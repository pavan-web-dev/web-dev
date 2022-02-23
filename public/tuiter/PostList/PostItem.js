const PostItem = (post) => {
    return(`
        <div class="col-2 d-flex justify-content-end">
            <img src="${post.avatar_location}" class="img-fluid rounded-circle basic-avatar" />
        </div>
        <div class="col-10">
            <div>
                <span class="fw-bold">${post.userName}</span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-patch-check-fill mb-1" viewBox="0 0 16 16">
                    <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
            </span>
            <span class="text-muted"> @${post.handle} - ${post.time}</span>
            </div>
            <div>
            ${post.title}
            </div>
            <div class="image-container mt-2">
                    <img src="${post.image}" class="img-fluid basic-fullimage${(!post.post_title && !post.post_content)? `1`: ''}">
            </div>
            ${(post.post_title && post.post_content) ? `
            <div class="basic-posttitle">
                <div class="fw-bold ps-2 pt-2 pe-2">${post.post_title}</div>
                <div class="text-muted ps-2 pb-2 pe-2">${post.post_content}</div>
            </div>` : ''}

            <div class="row mt-2">
                <div class="col-3 d-flex align-items-center justify-content-center">
                    <i class="far fa-comment"></i>
                    <div class="ps-3">${post.num_comment}</div>
                </div>
                <div class="col-3 d-flex justify-start align-items-center justify-content-center">
                    <i class="fas fa-retweet"></i>
                    <div class="ps-3">${post.num_retweet}</div>
                </div>
                
                <div class="col-3 d-flex justify-start align-items-center justify-content-center">
                    <i class="far fa-heart"></i>
                    <div class="ps-3">${post.num_likes}</div>
                </div>

                <div class="col-3 d-flex align-items-center justify-content-center">
                    <i class="fas fa-upload"></i>
                </div>
            </div>
            
        </div>
    `);   
}

export default PostItem;