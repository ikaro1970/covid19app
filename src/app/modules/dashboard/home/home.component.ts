import { selectGetPossibleErrorCasesState } from 'src/app/selectors/dashboard.selectors';
import { selectGetPossibleCasesState } from 'src/app/selectors/dashboard.selectors';
import { dashboardLabels } from 'src/app/shared/labels/dashboard.labels';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { GET_POSSIBLE_CASES, SET_LOADING } from 'src/app/actions';
import { Record } from 'src/interfaces/record.interface';
import { recordLabels } from 'src/app/shared/labels/record.labels';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  dashboardLabels = dashboardLabels;
  recordLabels = recordLabels;
  possibleCases$: Observable<Array<Record>>;

  constructor(private store: Store<AppState>) {
    this.possibleCases$ = this.store.select(
      selectGetPossibleCasesState
    );
  }
  ngAfterViewInit(): void {
    this.store.dispatch(SET_LOADING({ payload: true }));
    this.store.dispatch(GET_POSSIBLE_CASES());
  }

  ngOnInit(): void {
    this.store.select(selectGetPossibleErrorCasesState).pipe(
      map(responseState => {
        if (responseState !== '') {
          Swal.fire('Error', responseState, 'error');
        }
      })
    ).subscribe();
  }

}
