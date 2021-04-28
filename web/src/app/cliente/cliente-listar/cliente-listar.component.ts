import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  cliente: Cliente[] = [];

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.service.getCliente().subscribe(
      resposta => this.cliente = resposta
    )
  }

}
