import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

const routes: Routes = [
  {
    path: 'produto-form',
    component: ProdutoFormComponent
  },
  {
    path: 'produto-form/:id',
    component: ProdutoFormComponent
  },
  {
    path: 'produto-listar',
    component: ProdutoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
