import { MenuComponent } from './shared/commons/menu/menu.component';
import { FooterComponent } from './shared/commons/footer/footer.component';
import { HeaderComponent } from './shared/commons/header/header.component';
// Environment
import { environmentFire } from './../environments/environment.fire';
import { environment } from 'src/environments/environment';

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
import { LayoutComponent } from './shared/commons/layout/layout.component';
import { LoaderComponent } from './shared/commons/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoaderComponent
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
