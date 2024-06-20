import React from 'react';
import "./rightbar.css"
import { Users } from '../../dummyData';
import Online from '../online/online';
const Rightbar = ({profile}) => {
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
                   {Users.map(u=>(
                    <Online user={u} key={u.id}/>
                   ))}
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;
