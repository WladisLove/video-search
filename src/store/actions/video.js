import * as actionTypes from './actionTypes';
import * as videoAPI from '../api/video'

export const searchVideos = (term) => async (dispatch) => {
    dispatch({ type: actionTypes.SEARCH_VIDEOS_START });

    const response = await videoAPI.searchByTerm(term);

    response.error ? 
        dispatch({ type: actionTypes.SEARCH_VIDEOS_FAILURE })
        : dispatch({
            type: actionTypes.SEARCH_VIDEOS_SUCCESS,
            videos: response,
        });
}

export const changeFavourite = (id, isFavourite, isFavouriteList = false) => async (dispatch) => {
    const response = await videoAPI.changeFavourite(id, isFavourite);

    response.error ? 
        dispatch({ type: actionTypes.FAVOURITE_STATUS_FAILURE })
        : dispatch({
            type: actionTypes.FAVOURITE_STATUS_CHANGED,
            videoId: id,
            isFavouriteList,
        });
}


export const getFavourites = () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_FAVOURITES_START });

    const response = await videoAPI.getFavourites();
    console.log('[getFavourites]', response);

    response.error ? 
        dispatch({ type: actionTypes.GET_FAVOURITES_FAILURE })
        : dispatch({
            type: actionTypes.GET_FAVOURITES_SUCCESS,
            favourites: response,
        });
}

export const clearFavourites = () => ({ type: actionTypes.CLEAR_FAVOURITES });