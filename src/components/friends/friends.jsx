import React from 'react';
import './friends.css'
const Friends = ({friends}) => {
    return (
        <li className="sidebarFriend">
        <img src={friends.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{friends.username}</span>
        </li>
    );
}

export default Friends;
