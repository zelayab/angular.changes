import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() versions: Array<{ version: string; ruta: string }> = [
    { version: 'Angular 18', ruta: 'angular-18' },
    { version: 'Angular 19', ruta: 'angular-19' }
  ];

  constructor(private router: Router) {}

  isActive(version: string): boolean {
    return this.router.url.includes(`/${version}`);
  }
}
