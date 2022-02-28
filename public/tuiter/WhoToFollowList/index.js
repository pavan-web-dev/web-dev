import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
        <a href="#" class="list-group-item">
            <span class="d-none d-lg-block bs-bold">Who to follow</span>
        </a>    
        ${who.map((item) => {
            return(`
                ${WhoToFollowListItem(item)}
            `)
        }).join('')}
    </ul>
`); }

export default WhoToFollowList;
