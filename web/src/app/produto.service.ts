import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  save(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8080/produtos', produto);
  }
  getProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/produtos');
  }
  getProdutoById(id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produtos/${id}`);
  }
  atualizar(produto: Produto): Observable<any>{
    return this.http.put<Produto>(`http://localhost:8080/produtos/${produto.id}`, produto);
  }
  deletar(produto: Produto): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/produtos/${produto.id}`);
  }

}
