import posts from './posts.js'
import PostSummaryItem from './PostSummaryItem.js'

const PostSummaryList = () => {
    console.log(posts)
    return (`
        <ul class="list-group">
        ${posts.map(postItem => {
            return (PostSummaryItem(postItem));
        }).join('')}
        </ul>
    `);

}
export default PostSummaryList