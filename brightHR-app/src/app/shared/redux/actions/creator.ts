import { Content } from './../../../core/models/content';

import { IAction } from './../interface/action';
import { SEARCH_RESULT_SUCCESS, SEARCH_RESULT_REMOVE } from './action';

export function createActionApiFetchSuccess(search: Content[]): IAction {
  return {
    type: SEARCH_RESULT_SUCCESS,
    payload: search
  };
}

export function createActionApiFetchRemove(): IAction {
  return {
    type: SEARCH_RESULT_REMOVE,
    payload: []
  };
}
