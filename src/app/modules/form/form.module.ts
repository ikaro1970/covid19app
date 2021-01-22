import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
