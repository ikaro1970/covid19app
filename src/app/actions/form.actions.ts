import { createAction, props } from '@ngrx/store';
import { Record } from '../../interfaces/record.interface';

export const MAKE_A_RECORD = createAction(
  '[Form Actions] MAKE_A_RECORD',
  props<{ register: Record }>()
);

export const SUCCESSFUL_RECORDING = createAction(
  '[Form Actions] SUCCESSFUL_RECORDING',
  props<{ register: string }>()
);

export const INCORRECT_RECORDING = createAction(
  '[Form Actions] SUCCESSFUL_RECORDING',
  props<{ register: string }>()
);
