import PostSummaryItem from "./PostSummaryItem.js";
import {exploreItems} from "./posts.js"

const PostSummaryList = () => {

    return (`
    
        ${exploreItems.map((item) => {
            return(`
            <div class="wd-post row p-2">
                ${PostSummaryItem(item)}
            </div>
                `)
        }).join('')}
    
`); }

export default PostSummaryList;
