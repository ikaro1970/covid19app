import { effects } from './effects/index';
import * as reducers from './reducers';
import { ActionReducerMap, State, StoreModule } from '@ngrx/store';
import { AppState } from './reducers';

import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

export const reducerToken = new InjectionToken<
  ActionReducerMap<State<AppState>>
>('Registered Reducers');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    { provide: reducerToken, useValue: reducers },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
