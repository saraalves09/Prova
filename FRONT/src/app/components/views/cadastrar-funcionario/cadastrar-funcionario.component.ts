import { Funcionario1 } from './../../../Models/funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FuncionarioService } from 'src/app/services/Funcionario1.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  nome!: string;
  registro!: number;

  constructor(private router: Router, private service: FuncionarioService) { }
    ngOnInit(): void {
  }

  cadastrar(): void{
    let Funcionario1: Funcionario1 = {
      Name: this.nome,
      registration: this.registro
    }
    this.service.create(Funcionario1).subscribe(funcionario => {
      this.router.navigate(["funcionario1/listarFuncionarios"]);
    })
  }

}