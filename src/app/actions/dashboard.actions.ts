import { createAction, props } from '@ngrx/store';
import { Record } from '../../interfaces/record.interface';

export const GET_POSSIBLE_CASES = createAction(
  '[Dashboard Actions] GET_POSSIBLE_CASES'
);

export const GET_POSSIBLE_CASES_SUCCESS = createAction(
  '[Dashboard Actions] GET_POSSIBLE_CASES_SUCCESS',
  props<{ payload: Array<Record> }>()
);

export const GET_POSSIBLE_CASES_ERROR = createAction(
  '[Dashboard Actions] GET_POSSIBLE_CASES_ERROR',
  props<{ payload: string }>()
);
