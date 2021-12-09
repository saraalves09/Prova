import { Funcionario1 } from './../Models/funcionario';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  
  private baseURL = "http://localhost:5000/api/funcionario";

  constructor(private http: HttpClient) {}

  list(): Observable<Funcionario1[]> {
      return this.http.get<Funcionario1[]>(`${this.baseURL}/listFuncionarios`);
  }

  create(funcionario: Funcionario1): Observable<Funcionario1> {
      return this.http.post<Funcionario1>(`${this.baseURL}/create`, funcionario);
  }

}