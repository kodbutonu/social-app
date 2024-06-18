import React from 'react';
import "./post.css"
import { MoreVert } from '@material-ui/icons';
const Post = () => {
    return (
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/man.jpg" alt="" className='postProfileImg' />
                    <span className="postUsername">Özgür Ergin</span>
                    <span className="postTime">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey!Its my first post</span>
            <img src="assets/post/food.jpg" alt="" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/heart.jpg" alt="" className='likeIcon' />
                    <img src="assets/like.png" alt="" className='likeIcon' />
                    <span className="postLikeCounter">32 people liked it.</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommmentText">9 comments.</span>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Post;
