import { IAction } from './../interface/action';
import { InitialAppState } from '../interface/initialState';
import { CONTENT_RESULT_SEARCH, CONTENT_RESULT_SEARCH_FILTER, CONTENT_RESULT_SUCCESS } from '../actions/action';

export function rootReducer(state: InitialAppState, action: IAction): InitialAppState {
  const newState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case CONTENT_RESULT_SUCCESS:
      newState.searchResult = payload;
      break;

    case CONTENT_RESULT_SEARCH:
      newState.searchResult = payload;
      break;

    case CONTENT_RESULT_SEARCH_FILTER:
      newState.searchResult = payload;
      break;
  }
  return newState;
}
