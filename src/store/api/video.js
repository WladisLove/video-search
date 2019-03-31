import apiUrls from './apiUrls'

export const searchByTerm = (term) => {
    const query = `?query=${term}`;

    return fetch(apiUrls.SEARCH_VIDEOS + query , { 
        method: 'GET', 
        credentials: "include", 
    }).then(response => {
        
        return (response.status !== 200) ? 
            { error: true, }
            : response.json().then(json => json );
    })
    .catch(error => {
        console.log(error);
    });
}

export const changeFavourite = (id, isFavourite = true) => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json ");
    
    const body = {
        isFavourite: !isFavourite,
    };

    return fetch(apiUrls.VIDEO_TO_FAVOURITE(id), { 
        method: 'PATCH', 
        headers,
        body: JSON.stringify(body), 
        credentials: "include", 
    }).then(response => {
        
        return (response.status !== 204) ? 
            { error: true, }
            : { error: false };
    })
    .catch(error => {
        console.log(error);
    });
}

export const getFavourites = () => {

    return fetch(apiUrls.GET_FAVOURITES, { 
        method: 'GET', 
        credentials: "include", 
    }).then(response => {

        return (response.status !== 200) ? 
            { error: true, }
            : response.json().then(json => json );
    })
    .catch(error => {
        console.log(error);
    });
}