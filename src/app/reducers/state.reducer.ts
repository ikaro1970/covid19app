import { Action, createReducer, on } from '@ngrx/store';
import { SET_LOADING_SUCCESS } from '../actions/application-state.actions';

const loadingActionsReducerState = createReducer(
  false,
  on(SET_LOADING_SUCCESS, (state, { payload }) => {
    return payload;
  })
);
export function applicationLoadingState(
  state: boolean | undefined,
  action: Action
): any {
  return loadingActionsReducerState(state, action);
}
