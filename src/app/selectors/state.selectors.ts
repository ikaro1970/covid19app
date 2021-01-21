import { AppState } from './../reducers/index';
import { createSelector } from '@ngrx/store';

export const selectLoadingState = (state: AppState) => state.applicationLoadingState;
export const selectStateLoading = createSelector(
  selectLoadingState,
  (state: boolean) => state
);
