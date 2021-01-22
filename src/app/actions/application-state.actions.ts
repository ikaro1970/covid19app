import { createAction, props } from '@ngrx/store';

export const SET_LOADING = createAction(
  '[State Actions] SET_LOADING',
  props<{ payload: boolean }>()
);

export const SET_LOADING_SUCCESS = createAction(
  '[State Actions] SET_LOADING_SUCCESS',
  props<{ payload: boolean }>()
);
