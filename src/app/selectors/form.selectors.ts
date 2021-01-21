import { createSelector } from '@ngrx/store';
import { AppState } from './../reducers/index';

export const selectMakeRecordResponseState = (state: AppState) => state.makeRecordResponseState;
export const selectMakeRecordResponse = createSelector(
  selectMakeRecordResponseState,
  (state: string) => state
);
