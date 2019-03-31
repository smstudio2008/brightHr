import { Content } from './../../../core/models/content';

import { IAction } from './../interface/action';
import { SEARCH_RESULT_SUCCESS, SEARCH_RESULT_REMOVE, CONTENT_RESULT_SEARCH } from './action';

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

export function searchActionFetchByName(search: Content[], fileName: string): IAction {
  //const searchFilter = search.filter(x => x.name.includes(fileName));
  const keys = 'name';

  const r = search.filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(fileName, 'gi').test(item[key])));

  // console.log(searchFilter);

  return {
    type: CONTENT_RESULT_SEARCH,
    payload: r
  };
}
