const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="d-flex">
                <div class="flex-grow-1">
                    <span class="text-secondary">${post.topic}</span>
                    <br>
                    <span class="font-weight-bold">${post.userName}</span>
                    <span> <i class="fa-solid fa-circle-check"></i></span>
                    <span class="text-secondary">${post.time}</span>
                    <br>
                    <span class="font-weight-bold">${post.title}</span>
                </div>
                <div>
                    <img src="${post.image}" class="rounded" width="100px">
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;