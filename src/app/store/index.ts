import { ActionReducerMap } from '@ngrx/store';

import { counterReducer } from './counter';
import { CounterState } from './counter';

export interface AppState {
  counter: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};
