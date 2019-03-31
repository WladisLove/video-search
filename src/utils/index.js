export const replaceFavouriteStatus = (array, videoId) => (
    array.map(el => {
        return (el.id === videoId) 
            ? {
                ...el,
                isFavourite: !el.isFavourite
            } : el;
    })
);