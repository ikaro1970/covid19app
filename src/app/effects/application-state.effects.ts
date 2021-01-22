import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { SET_LOADING, SET_LOADING_SUCCESS } from '../actions';

@Injectable()
export class ApplicationStateEffects {
  constructor(
    private actions$: Actions
  ) { }

  @Effect()
  setLoadingState$ = this.actions$.pipe(
    delay(10),
    ofType<any>(SET_LOADING),
    switchMap(({ payload }) =>
      of(SET_LOADING_SUCCESS({ payload }))
    )
  );
}
