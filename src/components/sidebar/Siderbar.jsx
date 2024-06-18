import React from 'react';
import "./sidebar.css"
import { RssFeed,ChatSharp,MusicVideo,GroupSharp, Bookmark, QuestionAnswer, WorkRounded, Event, GolfCourse, Grade } from '@material-ui/icons';
const Siderbar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
               <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatSharp className='sidebarIcon'/>
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <MusicVideo className='sidebarIcon'/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupSharp className='sidebarIcon'/>
                    <span className="sidebarListItemText">Group</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <QuestionAnswer className='sidebarIcon'/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkRounded className='sidebarIcon'/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className="sidebarListItemText">Events</span>
                </li> <li className="sidebarListItem">
                    <GolfCourse className='sidebarIcon'/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
               </ul>
               <button className="sidebarButton">Show More</button>
               <hr className="sidebarHr" />
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
               <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                <img src="./assets/person/man.jpg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
                </li>
               </ul>
            </div>
        </div>
    );
}

export default Siderbar;
