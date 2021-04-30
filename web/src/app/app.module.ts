import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteService } from './cliente.service';
import { ClientesModule } from './cliente/cliente.module';
import { HomeComponent } from './home/home.component';
import { ProdutoService } from './produto.service';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoModule } from './produto/produto.module';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ProdutoModule
  ],
  providers: [
    ClienteService,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
