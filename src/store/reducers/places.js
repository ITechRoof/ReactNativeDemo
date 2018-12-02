import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlaces: null
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
                  }),
                selectedPlace: null
            }

        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return action.placeKey === place.key;
                  })
            }

        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace : null
            }
    
        default:
            return state;
    }
};

export default reducer;
