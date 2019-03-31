import React from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { searchVideos } from '../../store/actions/video'

import App from '../App'
import Favourites from '../Favourites'
import SearchBar from '../../components/SearchBar'

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
        this.setState({ value: e.target.value});
      }
    
      onSearchHandler = () => {
        this.props.history.push(routes.MAIN);
        this.props.onSearch(this.state.value);
      }

    render(){
        return (<div className='root-container'>
            <SearchBar {...this.props}/>
            
            <Switch>
                <Route exact path={routes.MAIN} component={App} />
                <Route path={routes.FAVOURITES} component={Favourites} />
            </Switch>
        </div>)
    }
};

const mapDispatchToProps = dispatch => {
	return {
        onSearch: (term) => dispatch(searchVideos(term)),
    };
};

export default connect(null, mapDispatchToProps)(withRouter(Root));