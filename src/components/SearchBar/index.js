import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { routes } from '../../containers/Root'

import './styles.css'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          value: '',
        }
    }
    
    onChangeHandler = (e) => this.setState({ value: e.target.value});

    onKeyDownHandler = (e) => {
        (e.keyCode == 13) && this.onSearchHandler();
    }
    
    onSearchHandler = () => {
        (this.props.location.pathname !== routes.MAIN) 
            && this.props.history.push(routes.MAIN);
        this.props.onSearch(this.state.value);
    }

    render(){
        return (<div className='search-bar'>
            <input className='search-input'
                value={this.state.value} 
                onChange={this.onChangeHandler}
                onKeyDown={this.onKeyDownHandler}/>

            <button className='search-btn'
                onClick={this.onSearchHandler}>
                Search
            </button>
            
            { this.props.location.pathname === routes.FAVOURITES ? 
                <Link to={routes.MAIN}><FontAwesomeIcon icon={faChevronLeft} />To search</Link>
                : <Link to={routes.FAVOURITES}>Favourites</Link> }
        </div>)
    }
};

export default SearchBar;