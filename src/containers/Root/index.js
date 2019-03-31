import React from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { searchVideos } from '../../store/actions/video'

import App from '../App'
import Favourites from '../Favourites'

export const routes = {
    MAIN: '/',
    FAVOURITES: '/favourites'
}

class Root extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          value: '',
        }
      }
    
      onChangeHandler = (e) => {
        //console.log(e.target.value);
        this.setState({ value: e.target.value});
      }
    
      onSearchHandler = () => {
        console.log('search:', this.state.value);
        this.props.history.push(routes.MAIN);
        this.props.onSearch(this.state.value);
      }

    render(){
        return (<div>
            <input value={this.state.value} onChange={this.onChangeHandler}/>
            <button onClick={this.onSearchHandler}>Search</button>

            { this.props.location.pathname === routes.FAVOURITES ? 
                <Link to={routes.MAIN}>Back to search</Link>
                : <Link to={routes.FAVOURITES}>Favourites</Link> }

            <Switch>
                <Route exact path={routes.MAIN} component={App} />
                <Route path={routes.FAVOURITES} component={Favourites} />
            </Switch>
        </div>)
    }
};

const mapStateToProps = state => {
	return {
    };
};

const mapDispatchToProps = dispatch => {
	return {
        onSearch: (term) => dispatch(searchVideos(term)),
    };
};

export default connect(null, mapDispatchToProps)(withRouter(Root));