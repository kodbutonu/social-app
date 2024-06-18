import React from 'react';
import "./rightbar.css"
const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className="rightWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/bicon.png" alt="" className='birthdayImg'/>
                    <span className="birthdayText">
                        <b>Pola Foster</b> <b>3 other friends</b>  have a birthday today.
                    </span>
                </div>
                <img src="/assets/birthday.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">
                    Online Friends
                </h4>
                <ul className="rightbarFriendList">
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/person/man.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;
