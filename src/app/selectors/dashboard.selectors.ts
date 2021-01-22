import { createSelector } from '@ngrx/store';
import { Record } from '../../interfaces/record.interface';
import { AppState } from '../reducers';

export const selectGetPossibleCasesState = (state: AppState) => state.getPossibleCasesState;
export const selectGetPossiblesCases = createSelector(
  selectGetPossibleCasesState,
  (state: Array<Record>) => state
);


export const selectGetPossibleErrorCasesState = (state: AppState) => state.getPossibleCasesErrorState;
export const selectGetPossiblesErrorCases = createSelector(
  selectGetPossibleErrorCasesState,
  (state: Array<Record>) => state
);
