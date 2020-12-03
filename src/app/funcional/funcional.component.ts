import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-funcional',
  templateUrl: './funcional.component.html',
  styleUrls: ['./funcional.component.css'],
})
export class FuncionalComponent implements OnInit, AfterViewChecked {
  url = 'https://api.github.com/users';
  request = ajax.get(this.url);
  usuariosGit: any;
  request2 = ajax.get('http://localhost:3000/clientes');
  dadosTabela: any;

  metodoGet = true;

  ngOnInit(): void {
    this.getDadosTabela();
    console.log('Página carregada');
  }
  ngAfterViewChecked(): void {
    $('#post').on('click', () => {
      const usuario = {
        id: 3,
        nome: 'Piero Ribeiro',
        endereco: 'Av. Paulista 1000',
        email: 'piero@gmail.com'
      };
      $.ajax({
        url: 'http://localhost:3000/clientes',
        data: usuario,
        type: 'POST',
        dataType: 'json',
      })
        .done(() => {
        })
        .fail((status, errorThrown) => {
          console.log('Sorry, there was a problem!', status, 'error: ', errorThrown);
        })
        .always((xhr, status) => {
          console.log('The request is complete!');
        });
    });
  }

  getUsuariosGitHub(): void {
    this.request.subscribe((usuarios) => {
      this.usuariosGit = usuarios.response;
      console.log('Dados trazidos sem carregamento da página com AJAX');
    });
  }
  getDadosTabela(): void {
    this.request2.subscribe((dados) => {
      this.dadosTabela = dados.response;
    });
  }
}
