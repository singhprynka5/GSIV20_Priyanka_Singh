import {
    MOVIE_DETAIL_FETCH_SUCCESS,
    MOVIE_DETAIL_FETCH_FAILED
} from "../../actions/movies/actionType";

let initialState = {
};

const movieDetail = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_DETAIL_FETCH_SUCCESS:
            return action.payload;
        case MOVIE_DETAIL_FETCH_FAILED:
            return { ...state };
        default:
            return { ...state };
    }
};

export default movieDetail;
