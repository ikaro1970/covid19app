import { selectStateLoading } from './../../../selectors/state.selectors';
import { AppState } from './../../../reducers/index';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MAKE_A_RECORD, SET_LOADING } from 'src/app/actions';
import { Record } from 'src/interfaces/record.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loadingState$: Observable<boolean> = this.store.select(
    selectStateLoading
  );
  currentRecord: Record;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(SET_LOADING({ payload: true }));
      this.store.dispatch(MAKE_A_RECORD({ payload: this.currentRecord }));
    }, 1000);
  }

}
