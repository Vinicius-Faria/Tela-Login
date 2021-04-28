import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ClienteService) {
    this.cliente = new Cliente();
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.cliente).subscribe(response => {
      this.success = true;
      this.errors = null;
    },
      ErrorResponse => {
        this.success = null;
        this.errors = ErrorResponse.error.errors;
      })
  }


  onClickCancel() {
    this.cliente.nome = null;
    this.cliente.cpf = null;
  }

}
