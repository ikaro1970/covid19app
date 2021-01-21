import { FormService } from './../services/form.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { MAKE_A_RECORD, SET_LOADING } from '../actions';

@Injectable()
export class FormEffects {
  constructor(
    private actions$: Actions,
    private formService: FormService
  ) {}

  @Effect()
  makeARegister$ = this.actions$.pipe(
    ofType<any>(MAKE_A_RECORD),
    switchMap(({ payload }) =>
      this.formService.makeARegister(payload).pipe(
        switchMap(res =>
          of(SET_LOADING({ newState: false }))
        ),
        catchError((err) => of(
          console.error(err)
        ))
      )
    )
  )
}
