import { AfterViewChecked, Component } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  title = 'sbt-angular';

  constructor(private router: Router) {}

  jquery() {
    this.router.navigate(['/jquery']);
  }
  ngAfterViewChecked() {
    $('#click').on('click', () => {
      alert('teste jquery');
    });
  }
}
