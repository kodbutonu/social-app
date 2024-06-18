import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';
import React from 'react';
import "./share.css"
const Share = () => {
    return (
        <div className="share">
            <div className="shareTop">
                <img src="./assets/person/man.jpg" alt="" className='shareProfileImg'/>
                <input placeholder="Whats's in your mind Özgür" className='shareInput' />
                
            </div>
            <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className='shareIcon' htmlColor='tomato'/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Label className='shareIcon' htmlColor='blue'/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Room className='shareIcon' htmlColor='green'/>
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <EmojiEmotions className='shareIcon' htmlColor='goldenrod'/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            
        </div>
    );
}

export default Share;
