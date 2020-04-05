import {
  MOVIEL_LIST_FETCH_SUCCESS,
  MOVIEL_LIST_FETCH_FAILED,
  MOVIEL_LOAD_MORE_SUCCESS
} from "../../actions/movies/actionType";

let initialState = {
  page: 1,
  results: []
};

const moviesList = (state = initialState, action) => {
  switch (action.type) {
    case MOVIEL_LIST_FETCH_SUCCESS:
      return {
        ...state,
        results: action.payload.results,
        page: state.page + 1
      };
    case MOVIEL_LOAD_MORE_SUCCESS:
      return {
        ...state,
        results: state.results.concat(action.payload.results),
        page: state.page + 1
      };
    case MOVIEL_LIST_FETCH_FAILED:
      return { ...state };
    default:
      return { ...state };
  }
};

export default moviesList;
