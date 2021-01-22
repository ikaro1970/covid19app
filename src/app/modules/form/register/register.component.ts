import { delay, last, map, skipLast, take, takeLast } from 'rxjs/operators';
import { selectMakeRecordResponseState } from 'src/app/selectors/form.selectors';
import { registerLabels } from 'src/app/shared/labels/register.labels';
import { selectStateLoading } from 'src/app/selectors/state.selectors';
import { AppState } from 'src/app/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MAKE_A_RECORD, SET_LOADING } from 'src/app/actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { recordLabels } from 'src/app/shared/labels/record.labels';
import { FormService } from 'src/app/services/form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  currentRecordForm: FormGroup;
  recordLabels = recordLabels;
  registerLabels = registerLabels;

  constructor(private store: Store<AppState>, private formService: FormService) {
    this.currentRecordForm = new FormGroup({
      documentId: new FormControl('', [Validators.required, Validators.max(9999999999), Validators.maxLength(10)]),
      fever: new FormControl('', [Validators.required, Validators.max(99), Validators.maxLength(2)]),
    });
  }

  ngOnInit(): void {
  }

  get documentId(): any { return this.currentRecordForm.get('documentId'); }

  get fever(): any { return this.currentRecordForm.get('fever'); }

  submitForm(): void {
    this.store.dispatch(SET_LOADING({ payload: true }));
    this.store.dispatch(MAKE_A_RECORD({ payload: this.currentRecordForm.value }));

    this.store.select(selectMakeRecordResponseState).pipe(
      map(responseState => {
        if (responseState !== '') {
          Swal.fire('Proceso terminado', responseState, 'success');
          this.currentRecordForm.reset();
        }
      })
    ).subscribe();
  }

}
