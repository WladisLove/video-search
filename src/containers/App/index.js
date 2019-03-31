import React, { Component } from 'react';
import VideoList from '../../components/VideoList'
import { connect } from 'react-redux';
import { changeFavourite } from '../../store/actions/video'


class App extends Component {
  

  render() {
    return (
      <div>
        <VideoList title="Search results"
          videos={this.props.videos.videos}
          loading={this.props.videos.loadingVideos}
          onChangeFavourite={this.props.onChangeFavourite}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
    videos: state.videos,
  };
};

const mapDispatchToProps = dispatch => {
	return {
    onChangeFavourite: (id, isFavourite) => dispatch(changeFavourite(id, isFavourite)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);