import posts from './posts.js'
import PostItem from './PostItem.js';

const PostList = () => {
    return (`
        <ul class="list-group">
            ${posts.map(postItem => {
                return (PostItem(postItem));
            }).join('')}
        </ul>
    `);
}
export default PostList