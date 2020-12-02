import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-funcional',
  templateUrl: './funcional.component.html',
  styleUrls: ['./funcional.component.css']
})
export class FuncionalComponent implements OnInit, AfterViewChecked {
  url = 'https://api.github.com/users';
  request = ajax.get(this.url);
  usuariosGit: any;

  constructor() { }

  ngOnInit(): void {
    console.log('Página carregada');
  }
  ngAfterViewChecked() {
    $('#teste').on('click', () => {
      console.log('teste jquery');
    });
  }

  getUsuariosGitHub() {
    this.request.subscribe(userData => {
      this.usuariosGit = userData.response;
      console.log('Dados trazidos sem carregamento da página com AJAX');
    });
  }
}
