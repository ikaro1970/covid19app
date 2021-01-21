import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { selectStateLoading } from 'src/app/selectors/state.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  loadingState$: Observable<boolean> = this.store.select(
    selectStateLoading
  );

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
