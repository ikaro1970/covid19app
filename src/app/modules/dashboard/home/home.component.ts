import { selectGetPossibleCasesState } from './../../../selectors/dashboard.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { GET_POSSIBLE_CASES } from 'src/app/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  possibleCases$: Observable<[]> = this.store.select(
    selectGetPossibleCasesState
  );

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(GET_POSSIBLE_CASES());
  }

}
