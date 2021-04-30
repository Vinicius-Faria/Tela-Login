import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produto: Produto;
  success: Boolean = false;
  errors: String[];
  id: number;

  constructor(private service: ProdutoService,
    private activatedRouter: ActivatedRoute,
    private router: Router) {
    this.produto = new Produto();
  }


  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params.id;
    this.service.getProdutoById(this.id).subscribe(
      response => this.produto = response,
      errorReponse => this.produto = new Produto()
    )  
  }

  voltarParaListagem() {
    this.router.navigate(['/produto-listar']);
  }

  onSubmit() {
    if (this.id) {
      
      this.service.atualizar(this.produto).subscribe(
        response => {
          this.success = true;
          this.errors = null;
        },
        errorResponse => [
          this.errors = ["Erro ao atualizar"]
        ]
      )

    } else {
      this.service.save(this.produto).subscribe(response => {
        this.success = true;
        this.errors = null;
      },
        ErrorResponse => {
          this.success = null;
          this.errors = ErrorResponse.error.errors;
        })
    }

  }

}