import who from './who.js'
import WhoToFollowListItem from './WhoToFollowListItem.js';

const WhoToFollowComponent = () => {
    return (`
        <div id="suggestions-section">
            <div class="list-group">
                <div class="list-group-item font-weight-bold">Who to follow</div>
                    ${who.map(whoItem => {
                        return (WhoToFollowListItem(whoItem));
                    }).join('')}
                </div>
            </div>
        </div>
    `);
};
export default WhoToFollowComponent