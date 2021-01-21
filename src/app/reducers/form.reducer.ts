import { INCORRECT_RECORDING, SUCCESSFUL_RECORDING } from './../actions/form.actions';
import { Action, createReducer, on } from '@ngrx/store';

const makeRecordResponseReducerState = createReducer(
  '',
  on(SUCCESSFUL_RECORDING, (state, { payload }) => {
    return 'Success: ' + payload;
  }),
  on(INCORRECT_RECORDING, (state, { payload }) => {
    return 'Error: ' + payload;
  })
);

export function makeRecordResponseState(
  state: string | undefined,
  action: Action
): any {
  return makeRecordResponseReducerState(state, action);
}
