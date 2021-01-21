import { InjectionToken } from '@angular/core';
import { ActionReducerMap, State } from '@ngrx/store';
import { AppState } from 'src/app/reducers';


export const environment = {
  production: false,
  reducerToken: new InjectionToken<
    ActionReducerMap<State<AppState>>
  >('Registered Reducers')
};
