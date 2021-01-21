import { createAction, props } from '@ngrx/store';

export const SET_LOADING = createAction(
  '[State Actions] SET_LOADING',
  props<{ newState: boolean }>()
);
