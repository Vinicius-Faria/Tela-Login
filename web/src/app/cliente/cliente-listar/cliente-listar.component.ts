import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  cliente: Cliente[] = [];
  clienteSelecionado: Cliente;
  menssagemSuccess : string;
  menssagemError : string;

  constructor(
    private service: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getCliente().subscribe(
      resposta => this.cliente = resposta
    )
  }

  novoCadastro() {
    this.router.navigate(['/cliente-form']);
  }

  preparaDelete(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletaCliente() {
    this.service.deletar(this.clienteSelecionado).subscribe(
      response => {
        this.menssagemSuccess = "Cliente deletado com sucesso!",
          this.ngOnInit();
      },
      erro => this.menssagemError = "Erro ao deletar o cliente!"
    )
  }

}
