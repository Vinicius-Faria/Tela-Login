import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoRoutingModule } from './produto-routin.module';

@NgModule({
  declarations: [
    ProdutoFormComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
  ],
  exports: [
    ProdutoFormComponent,
    ProdutoListaComponent
  ]
})
export class ProdutoModule { }
