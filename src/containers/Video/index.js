import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component {
  render() {
    return (
      <div>
        Single video route
      </div>
    );
  }
}

const mapStateToProps = state => {
	return { };
};

const mapDispatchToProps = dispatch => {
	return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);