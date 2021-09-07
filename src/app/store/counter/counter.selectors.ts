import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterState } from './counter.state';

export const counterKey = 'counter'

const visitCounter = createFeatureSelector<CounterState>(counterKey);

export const count = createSelector(
  visitCounter,
  s => s.count
);
