const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="d-flex">
                <div class="flex-grow-1">
                    <span class="text-secondary ${post.topic === '' ? 'd-none' : ''}">${post.topic}</span>
                    <br class=${post.topic === '' ? 'd-none' : ''}>
                    <span class="font-weight-bold ${post.userName === '' ? 'd-none' : ''}">${post.userName}</span>
                    <span> <i class="fa-solid fa-circle-check"></i></span>
                    <span class="text-secondary ${post.time === '' ? 'd-none' : ''}">&nbsp;-&nbsp;${post.time}</span>
                    <br>
                    <span class="font-weight-bold ${post.title === '' ? 'd-none' : ''}">${post.title}</span>
                </div>
                <div>
                    <img src="${post.image}" class="br-15 ${post.image === '' ? 'd-none' : ''}" width="100px">
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;