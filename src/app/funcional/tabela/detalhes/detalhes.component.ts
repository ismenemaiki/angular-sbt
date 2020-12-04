import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
  export class DetalhesComponent implements OnInit {
    id: string;
    cliente: { id: string, nome: string, email: string};
    dadosTabela: [];
    request = ajax.get('http://localhost:3000/clientes');

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getDadosTabela();
    this.route.params.subscribe(param => {
      this.id = param['id'];
    });
    setTimeout(() => {
      this.dadosTabela.forEach((it: any) => {
        if (it.id === this.id) {
          this.cliente = it;
        }
      });
    }, 1000);

  }
  getDadosTabela(): void {
    this.request.subscribe((dados) => {
      this.dadosTabela = dados.response;
    });
  }
}
