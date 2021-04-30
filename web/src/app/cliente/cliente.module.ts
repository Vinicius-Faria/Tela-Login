import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesFormComponent } from './cliente-form/clientes-form.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClientesRoutingModule } from './cliente-routing.module';

@NgModule({
  declarations: [
    ClientesFormComponent,
    ClienteListarComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports: [
    ClientesFormComponent,
    ClienteListarComponent
  ]
})
export class ClientesModule { }
