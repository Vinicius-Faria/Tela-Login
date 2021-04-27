import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientesFormComponent } from './cleinte-form/cleintes-form.component';
import { ClientesRoutingModule } from './cliente-routing.module';



@NgModule({
  declarations: [
    ClientesFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  exports: [
    ClientesFormComponent
  ]
})
export class ClientesModule { }
