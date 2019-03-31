const apiVideos = 'http://localhost:6001/videos/';
const apiUrls = {
    SEARCH_VIDEOS: apiVideos + 'search',
    VIDEO_TO_FAVOURITE: (id) =>  apiVideos + id,
    GET_FAVOURITES: apiVideos + 'favourites'
}

export default apiUrls;