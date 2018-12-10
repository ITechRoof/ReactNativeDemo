import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(), 
                    value : action.placeName,
                    image: {
                      uri: "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg"
                    }
                  })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return state.selectedPlace.key !== place.key;
                  })
            }
    
        default:
            return state;
    }
};

export default reducer;
