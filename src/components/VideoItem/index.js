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
            <div className='video-info'>
                <div className='video-title'>{title}</div>
                <div className='video-desc'>{description}</div>
                <div className='video-published-time'>{timeDifference(publishedAt)}</div>
                <div className='favourite-btn-wrapper'>
                    <div onClick={props.changeFavouriteStatus} className={`favourite-btn ${isFavourite && 'active'}`}>
                        {/*isFavourite ? 'FROM' : 'TO'*/} Favourite
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;