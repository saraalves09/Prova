import { Funcionario1 } from './../../../Models/funcionario';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/Funcionario1.service'; 

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario1[] = [];

  constructor(private service: FuncionarioService) { }

  ngOnInit(): void {
    this.service.list().subscribe((funcionarios) => {
      this.funcionarios = funcionarios;
    })
  }

}