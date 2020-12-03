import { AfterViewChecked, Component, OnInit, TemplateRef } from '@angular/core';
import { ajax } from 'rxjs/ajax';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-funcional',
  templateUrl: './funcional.component.html',
  styleUrls: ['./funcional.component.css'],
})
export class FuncionalComponent implements OnInit, AfterViewChecked {
  url = 'https://api.github.com/users';
  urlClientes = 'http://localhost:3000/clientes';
  request = ajax.get(this.url);
  usuariosGit: [];
  request2 = ajax.get(this.urlClientes);
  dadosTabela: [];
  metodoGet = true;

  controleChamada = false;
  pessoa = {
    nome: '',
    email: ''
  };
  modalRef: BsModalRef;
  config = { keyboard: true };

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.getDadosTabela();
    console.log('Página carregada');
  }
  ngAfterViewChecked(): void {
    $('#post').on('click', () => {
      if (this.controleChamada === false) {
      const usuario = {
        id: this.gerarId(1, 800),
        nome: this.pessoa.nome,
        email: this.pessoa.email
      };
      $.ajax({
        url: this.urlClientes,
        data: usuario,
        type: 'POST',
        dataType: 'application/json',
      })
        .done(() => {
        })
        .fail((status, errorThrown) => {
          console.log('Sorry, there was a problem!', status, 'error: ', errorThrown);
        })
        .always((xhr, status) => {
          console.log('The request is complete!');
        });
      this.getDadosTabela();
      this.modalRef.hide();
      this.pessoa = { nome: '', email: '' };
      this.controleChamada = true;
    }
    });
  }

  getUsuariosGitHub(): void {
    this.request.subscribe((usuarios) => {
      this.usuariosGit = usuarios.response;
      console.log('Dados trazidos sem recarregamento da página com AJAX');
    });
  }
  getDadosTabela(): void {
    this.request2.subscribe((dados) => {
      this.dadosTabela = dados.response;
    });
  }

  abrirModal(template: TemplateRef<any>) {
    this.controleChamada = false;
    this.modalRef = this.modalService.show(template, this.config);
  }

  gerarId(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
