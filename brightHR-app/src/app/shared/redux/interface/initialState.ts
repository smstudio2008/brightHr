import { Content } from '@angular/compiler/src/render3/r3_ast';

export interface InitialAppState {
  searchResult: Content[];
}

export const INITIAL_STATE: InitialAppState = {
  searchResult: []
};
