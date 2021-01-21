import { GET_POSSIBLE_CASES_SUCCESS } from './../actions/dashboard.actions';
import { Action, createReducer, on } from '@ngrx/store';

const getPossibleCasesReducerState = createReducer(
  [],
  on(GET_POSSIBLE_CASES_SUCCESS, (state, { payload }) => {
    return payload;
  })
);

export function getPossibleCasesState(
  state: [] | undefined,
  action: Action
): any {
  return getPossibleCasesReducerState(state, action);
}
