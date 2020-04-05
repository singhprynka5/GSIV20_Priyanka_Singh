import { combineReducers } from "redux";

import moviesList from "./moviesList";
import movieDetail from "./moviesList/movieDetail";

export default combineReducers({
  moviesList,
  movieDetail
});
