import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface IMenuOption {
  label: string;
  subtitle: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'gifs-side-menu-option',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-option.component.html',
  styles: ``
})
export class SideMenuOptionComponent {
  menuOptions: IMenuOption[] = [
    {
      label: 'Trending',
      subtitle: 'Most popular GIFs',
      icon: 'fa-solid fa-chart-line',
      route: '/dashboard/trending'
    },
    {
      label: 'Search',
      subtitle: 'Search GIFs',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/dashboard/search'
    }
  ];

}
