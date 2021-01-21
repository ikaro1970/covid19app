import { DashboardService } from './../services/dashboard.service';
import { GET_POSSIBLE_CASES, GET_POSSIBLE_CASES_ERROR, GET_POSSIBLE_CASES_SUCCESS } from './../actions/dashboard.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { SET_LOADING } from '../actions';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) { }

  @Effect()
  getRecords$ = this.actions$.pipe(
    ofType<any>(GET_POSSIBLE_CASES),
    switchMap(() =>
      this.dashboardService.getPossibleCases().pipe(
        switchMap(res =>
          of(SET_LOADING({ payload: false }), GET_POSSIBLE_CASES_SUCCESS({ payload: res }))
        ),
        catchError((err) => of(
          GET_POSSIBLE_CASES_ERROR({ payload: err })
        ))
      )
    )
  );
}
