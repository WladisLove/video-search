import * as actionTypes from '../actions/actionTypes'
import { replaceFavouriteStatus } from '../../utils'

const initialState = {
    videos: [],
    loadingVideos: false,
    favourites: [],
    loadingFavourites: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SEARCH_VIDEOS_START:
            return {
                ...state,
                loadingVideos: true,
                videos: [],
            }
        case actionTypes.SEARCH_VIDEOS_SUCCESS:
            return {
                ...state,
                loadingVideos: false,
                videos: action.videos,
            }
        case actionTypes.SEARCH_VIDEOS_FAILURE:
            return {
                ...state,
                loadingVideos: false,
                videos: [],
            }
        case actionTypes.FAVOURITE_STATUS_CHANGED:
            const newVideos = replaceFavouriteStatus(state.videos, action.videoId);
            const newFavourites = action.isFavouriteList ?
                replaceFavouriteStatus(state.favourites, action.videoId) : state.favourites;
            return {
                ...state,
                videos: newVideos,
                favourites: newFavourites,
            }
        case actionTypes.FAVOURITE_STATUS_FAILURE:
            return {
                ...state,
            }
        case actionTypes.GET_FAVOURITES_START:
            return {
                ...state,
                loadingFavourites: true,
                favourites: [],
            }
        case actionTypes.GET_FAVOURITES_SUCCESS:
            return {
                ...state,
                loadingFavourites: false,
                favourites: action.favourites,
            }
        case actionTypes.GET_FAVOURITES_FAILURE:
        case actionTypes.CLEAR_FAVOURITES:
            return {
                ...state,
                loadingFavourites: false,
                favourites: [],
            }
        default:
            return state;
    }
};

export default reducer;