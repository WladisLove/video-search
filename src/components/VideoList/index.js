import React, { Component } from 'react';
import VideoItem from '../VideoItem'
import Loader from 'react-loader-spinner'

import './styles.css'

class VideoList extends Component {
  constructor(props){
    super(props);
    this.state = { }
  }

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
                videos.map(video => (
                    <VideoItem key={video.id}
                        video={video}
                        changeFavouriteStatus={this.changeFavouriteStatus(video.id, video.isFavourite)}
                        onVideoClick={this.onVideoClick(video.id)}/>
                ))
            ) : (
                <div className='loader-container'>
                    <Loader type="Oval" color="#5181b8" height={80} width={80} />
                </div>
            )
        }
        
    </div>);
  }
}

export default VideoList;