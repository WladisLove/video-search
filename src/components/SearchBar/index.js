import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { routes } from '../../containers/Root'

import './styles.css'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          value: props.defaultValue,
        }
    }
    
    onChangeHandler = (e) => this.setState({ value: e.target.value});

    onKeyDownHandler = (e) => {
        (e.keyCode == 13) && this.onSearchHandler();
    }
    
    onSearchHandler = () => {
        this.props.history.push(`${routes.MAIN}${routes.query.SEARCH}${this.state.value}`);
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
                <Link to={`${routes.MAIN}${routes.query.SEARCH}${this.state.value}`}>
                    <FontAwesomeIcon icon={faChevronLeft} />To search
                </Link>
                : <Link to={routes.FAVOURITES}>Favourites</Link> }
        </div>)
    }
};

SearchBar.propTypes = {
    defaultValue: PropTypes.string,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
    defaultValue: '',
    onSearch: () => {},
};

export default SearchBar;