import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Purlieu';
  sideNav = [
    {
      route: '/dashboard',
      title: 'Dashboard'
    }
  ];

  constructor(
    private titleService: Title
  ) {
    this.setTitle(this.title);
  }

  // https://angular.io/guide/set-document-title
  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
