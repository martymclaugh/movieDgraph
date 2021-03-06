import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  selectedMovie: {},
  nowPlaying: [],
  recentlyViewed: [],
  popular: [],
  upcoming: [],
  topRated: [],
  similar: [],
  movies: [],
  tmdbMovie: {},
  omdbMovie: {},
  trailer: {},
  ratings: [],
};
export const MovieReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case types.FETCH_POPULAR_SUCCESS:
    return {...state, popular: action.payload.results};
  case types.FETCH_UPCOMING_SUCCESS:
    return {...state, upcoming: action.payload.results};
  case types.FETCH_TOP_RATED_SUCCESS:
    return {...state, topRated: action.payload.results};
  case types.FETCH_NOW_PLAYING_SUCCESS:
    return {...state, nowPlaying: action.payload.results};
  case types.FETCH_SIMILAR_SUCCESS:
    return {...state, similar: action.payload.results};
  case types.FETCH_TMDB_SUCCESS:
    return {...state, movies: action.payload.results};
  case types.FETCH_TMDB_ID:
    return {...state, tmdbMovie: action.payload.data};
  case types.FETCH_OMDB_ID:
    return {...state, omdbMovie: action.payload.data};
  case types.FETCH_YOUTUBE_TRAILER:
    return {...state, trailer: action.payload.data};
  case types.FETCH_IMDB_RATINGS:
    return {...state, ratings: action.payload.data};
  case types.FETCH_RECENTLY_VIEWED:
    console.log(action.payload)
    return {...state, recentlyViewed: action.payload}
  default:
    if (action.error) console.log(action.error);
    return state;
  }
}
