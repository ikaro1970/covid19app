import { servicesLabels } from '../shared/labels/services.labels';
import { FormService } from './../services/form.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { INCORRECT_RECORDING, MAKE_A_RECORD, SET_LOADING, SUCCESSFUL_RECORDING } from '../actions';

@Injectable()
export class FormEffects {
  constructor(
    private actions$: Actions,
    private formService: FormService
  ) { }

  @Effect()
  makeARegister$ = this.actions$.pipe(
    ofType<any>(MAKE_A_RECORD),
    switchMap(({ payload }) =>
      this.formService.makeARegister(payload).pipe(
        switchMap(() =>
          of(SET_LOADING({ payload: false }), SUCCESSFUL_RECORDING({ payload: servicesLabels.correctResponse }))
        ),
        catchError(() => of(
          INCORRECT_RECORDING({ payload: servicesLabels.incorrectResponse })
        ))
      )
    )
  );
}
