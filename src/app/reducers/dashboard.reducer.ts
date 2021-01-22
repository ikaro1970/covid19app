import { GET_POSSIBLE_CASES_SUCCESS, GET_POSSIBLE_CASES_ERROR } from './../actions/dashboard.actions';
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

const getPossibleCasesErrorReducerState = createReducer(
  '',
  on(GET_POSSIBLE_CASES_ERROR, (state, { payload }) => {
    return payload;
  })
);
export function getPossibleCasesErrorState(
  state: '' | undefined,
  action: Action
): any {
  return getPossibleCasesErrorReducerState(state, action);
}
