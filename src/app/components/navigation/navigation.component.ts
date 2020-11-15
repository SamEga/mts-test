import { Component } from '@angular/core';

type NavigationPage = { title: string; path: string };

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent {
  pages: Array<NavigationPage> = [
    { title: 'Главная', path: 'home' },
    { title: 'Настройки', path: 'settings' },
  ];
}
