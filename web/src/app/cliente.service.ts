import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente/cliente';

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
  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8080/clientes/${id}`);
  }
  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`http://localhost:8080/clientes/${cliente.id}`, cliente);
  }
  deletar(cliente: Cliente): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/clientes/${cliente.id}`);
  }
}
