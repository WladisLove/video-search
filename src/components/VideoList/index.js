import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem'
import Loader from 'react-loader-spinner'

import './styles.css'

class VideoList extends Component {

  onVideoClick = (id) => () => {
    console.log('[onVideoClick]', id);
  }

  changeFavouriteStatus = (id, isFavourite) => (e) => {
    this.props.onChangeFavourite(id, isFavourite);
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  render() {

    const { videos, loading, title } = this.props;

    return (<div className='video-list'>
        {title && <h2>{title}</h2>}

        {
            !loading ? (
                videos.length ? (
                    videos.map(video => (
                        <VideoItem key={video.id}
                            video={video}
                            changeFavouriteStatus={this.changeFavouriteStatus(video.id, video.isFavourite)}
                            onVideoClick={this.onVideoClick(video.id)}/>
                    ))
                ) : (
                    <div className='emply-list'>No videos</div>
                )
            ) : (
                <div className='loader-container'>
                    <Loader type="Oval" color="#5181b8" height={80} width={80} />
                </div>
            )
        }
        
    </div>);
  }
}

VideoList.propTypes = {
    videos: PropTypes.array,
    loading: PropTypes.bool,
    title: PropTypes.string,
    onChangeFavourite: PropTypes.func,
};

VideoList.defaultProps = {
    videos: [],
    loading: false,
    title: '',
    onChangeFavourite: () => {},
};

export default VideoList;