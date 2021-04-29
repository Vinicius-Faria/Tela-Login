import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './cliente-form/clientes-form.component';
import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';

const routes: Routes = [
  {
    path: 'cliente-form',
    component: ClientesFormComponent
  },
  {
    path: 'cliente-form/:id',
    component: ClientesFormComponent
  },
  {
    path: 'cliente-listar',
    component: ClienteListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
