import PostItem from "./PostItem.js";
import {postItems} from "./posts.js"

const PostList = () => {

    return (`
    
        ${postItems.map((item) => {
            return(`
            <div class="wd-postlist row mt-2">
                ${PostItem(item)}
            </div>
                `)
        }).join('')}
    
`); }

export default PostList;
