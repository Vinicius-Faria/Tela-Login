import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produto: Produto[] = [];
  produtoSelecionado: Produto;
  menssagemSuccess : string;
  menssagemError : string;

  constructor(
    private service: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getProduto().subscribe(
      resposta => this.produto = resposta
    )
  }

  novoCadastro() {
    this.router.navigate(['/produto-form']);
  }

  preparaDelete(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  deletaProduto() {
    this.service.deletar(this.produtoSelecionado).subscribe(
      response => {
        this.menssagemSuccess = "Produto deletado com sucesso!",
          this.ngOnInit();
      },
      erro => this.menssagemError = "Erro ao deletar o produto!"
    )
  }

}