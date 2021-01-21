import { createAction, props } from '@ngrx/store';
import { Record } from '../../interfaces/record.interface';

export const MAKE_A_RECORD = createAction(
  '[Form Actions] MAKE_A_RECORD',
  props<{ payload: Record }>()
);

export const SUCCESSFUL_RECORDING = createAction(
  '[Form Actions] SUCCESSFUL_RECORDING',
  props<{ payload: string }>()
);

export const INCORRECT_RECORDING = createAction(
  '[Form Actions] INCORRECT_RECORDING',
  props<{ payload: string }>()
);
