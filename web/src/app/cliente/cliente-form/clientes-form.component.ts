import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: Boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ClienteService,
    private activatedRouter: ActivatedRoute,
    private router: Router) {
    this.cliente = new Cliente();
    
  }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params.id;
    this.service.getClienteById(this.id).subscribe(
      response => this.cliente = response,
      errorReponse => this.cliente = new Cliente()
    )  
  }

  voltarParaListagem() {
    this.router.navigate(['/cliente-listar']);
  }

  onSubmit() {
    if (this.id) {
      
      this.service.atualizar(this.cliente).subscribe(
        response => {
          this.success = true;
          this.errors = null;
        },
        errorResponse => [
          this.errors = ["Erro ao atualizar"]
        ]
      )

    } else {
      this.service.save(this.cliente).subscribe(response => {
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
