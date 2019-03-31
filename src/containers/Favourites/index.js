import React, { Component } from 'react';
import VideoList from '../../components/VideoList'
import { connect } from 'react-redux';
import { getFavourites, clearFavourites, changeFavourite } from '../../store/actions/video'


class Video extends Component {

  componentDidMount(){
    this.props.onGetFavourites();
  }

  componentWillUnmount(){
    this.props.clearFavourites();
  }

  render() {
    return (
      <div>
        <VideoList title="Your Favourites:"
          videos={this.props.videos.favourites}
          loading={this.props.videos.loadingFavourites}
          onChangeFavourite={this.props.onChangeFavourite}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
    videos: state.videos
  };
};

const mapDispatchToProps = dispatch => {
	return {
    onGetFavourites: () => dispatch(getFavourites()),
    clearFavourites: () => dispatch(clearFavourites()),
    onChangeFavourite: (id, isFavourite) => dispatch(changeFavourite(id, isFavourite, true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);