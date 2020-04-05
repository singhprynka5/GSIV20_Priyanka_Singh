import axios from "axios";
import {
  MOVIEL_LIST_FETCH_SUCCESS,
  MOVIEL_LIST_FETCH_FAILED,
  MOVIE_DETAIL_FETCH_SUCCESS,
  MOVIEL_LOAD_MORE_SUCCESS,
  MOVIE_DETAIL_FETCH_FAILED
} from "./actionType";

export const fetchMoviesList = (page, loadmore) => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=4f979dd496b242397224d423bba2284c&page=${page}`
      );
      if (loadmore) {
        return dispatch(returnStatus(response.data, MOVIEL_LOAD_MORE_SUCCESS));
      } else {
        return dispatch(returnStatus(response.data, MOVIEL_LIST_FETCH_SUCCESS));
      }
    } catch (err) {
      return dispatch(returnStatus(err, MOVIEL_LIST_FETCH_FAILED));
    }
  };
};

export const getMovieDetail = id => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4f979dd496b242397224d423bba2284c`
      );
      return dispatch(returnStatus(response.data, MOVIE_DETAIL_FETCH_SUCCESS));
    } catch (err) {
      return dispatch(returnStatus(err, MOVIE_DETAIL_FETCH_FAILED));
    }
  };
};

const returnStatus = (message, type) => {
  return {
    type: type,
    payload: message
  };
};
