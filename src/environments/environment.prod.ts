import { AppState } from './../app/reducers/index';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap, State } from '@ngrx/store';

export const environment = {
  production: true,
  reducerToken: new InjectionToken<
    ActionReducerMap<State<AppState>>
  >('Registered Reducers')
};
