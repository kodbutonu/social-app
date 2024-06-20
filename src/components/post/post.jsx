import React, { useState } from 'react';
import "./post.css"
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../dummyData';
const Post = ({post}) => {
    const [like,setLike]=useState(post.like)
    const [isliked,setIsliked]=useState(false)

    const likeHandler=()=>{
         setLike(isliked?like-1:like+1)
         setIsliked(!isliked)
    }
    return (
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className='postProfileImg' />
                    <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                    <span className="postTime">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
            <img src={post.photo} alt="" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/heart.jpg" alt="" className='likeIcon' onClick={()=>likeHandler()} />
                    <img src="assets/like.png" alt="" className='likeIcon' onClick={()=>likeHandler()}/>
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommmentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Post;
