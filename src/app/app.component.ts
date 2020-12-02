import { AfterViewChecked, Component } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  title = 'sbt-angular';

  ngAfterViewChecked() {
    $('#click').on('click', () => {
      alert('teste jquery');
    });
  }
}
