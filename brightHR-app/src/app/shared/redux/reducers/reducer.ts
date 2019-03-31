import { IAction } from './../interface/action';
import { InitialAppState } from '../interface/initialState';
import { SEARCH_RESULT_SUCCESS, SEARCH_RESULT_REMOVE } from '../actions/action';

export function rootReducer(state: InitialAppState, action: IAction): InitialAppState {
  const newState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case SEARCH_RESULT_SUCCESS:
      newState.searchResult = payload;
      break;

    case SEARCH_RESULT_REMOVE:
      newState.searchResult = [];
      break;
  }

  return newState;
}
