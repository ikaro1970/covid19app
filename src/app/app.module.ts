// Environment
import { environmentFire } from './../environments/environment.fire';

// Library
import { effects } from './effects/index';
import * as reducers from './reducers';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(environment.reducerToken),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environmentFire),
  ],
  providers: [
    { provide: environment.reducerToken, useValue: reducers },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
