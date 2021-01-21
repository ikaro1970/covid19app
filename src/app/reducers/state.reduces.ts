import { Action, createReducer, on } from '@ngrx/store';
import { SET_LOADING } from '../actions/state.actions';

const loadingActionsReducerState = createReducer(
  false,
  on(SET_LOADING, (state, { newState }) => {
    return newState;
  })
);
export function applicationLoadingState(
  state: boolean | undefined,
  action: Action
): any {
  return loadingActionsReducerState(state, action);
}
