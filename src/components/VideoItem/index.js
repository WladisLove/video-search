import React from "react";
import { timeDifference } from '../../utils/date'

import './styles.css'

const VideoItem = (props) => {

    const {
        title, description, thumbs, publishedAt, isFavourite,
    } = props.video;
    return (
        <div onClick={props.onVideoClick} className='video-item'>
            <img src={thumbs.medium}/>
            <div>
                <div className='video-title'>{title}</div>
                <div className='video-desc'>{description}</div>
                <div>{timeDifference(publishedAt)}</div>
                <div onClick={props.changeFavouriteStatus} className={`favourite-btn ${isFavourite && 'active'}`}>
                    {isFavourite ? 'FROM' : 'TO'} Favourite
                </div>
            </div>
        </div>
    );
}

export default VideoItem;