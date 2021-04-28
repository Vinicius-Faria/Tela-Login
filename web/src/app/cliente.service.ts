import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente/cliente';
import { ClientesFormComponent } from './cliente/cliente-form/clientes-form.component';

@Injectable({
  providedIn: 'root'
})
  
export class ClienteService {

  constructor(private http: HttpClient) {
  }
  
  save(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/clientes', cliente);
  }
  getCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/clientes');
  }
}
