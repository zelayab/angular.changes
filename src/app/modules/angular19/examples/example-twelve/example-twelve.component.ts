import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-lazy-guards',
  template: `
    <h3>Lazy Route Guards</h3>

    <h4>¿Qué son los Lazy Route Guards?</h4>
    <p>
      Los Lazy Route Guards en Angular 19 permiten cargar guardias de rutas de manera diferida,
      mejorando el rendimiento y reduciendo el tiempo de carga inicial.
    </p>

    <h4>Casos de Uso:</h4>
    <ul>
      <li><b>Protección de rutas sensibles:</b> Evitar accesos no autorizados en áreas como configuraciones o administración.</li>
      <li><b>Condiciones dinámicas:</b> Validar datos del servidor antes de permitir el acceso.</li>
      <li><b>Rendimiento optimizado:</b> Solo cargar los guardias necesarios cuando se accede a la ruta protegida.</li>
    </ul>

    <h4>Ventajas:</h4>
    <ul>
      <li><b>Optimización de carga:</b> Los guardias se cargan solo cuando se necesita evaluar la ruta.</li>
      <li><b>Flexibilidad:</b> Ideal para aplicaciones con rutas protegidas dinámicamente.</li>
    </ul>

    <h4>Código del Guard:</h4>
    <code-example [code]="guardCode"></code-example>

    <h4>Código de la Ruta:</h4>
    <code-example [code]="routeCode"></code-example>
  `,
  styles: [`
    h3, h4 { color: #2c3e50; }
    ul { margin: 10px 0; padding-left: 20px; }
    p { font-size: 1rem; color: #333; }
  `],
  standalone: true,
  imports: [CodeExampleComponent],
})
export class ExampleTwelveComponent {
  guardCode = `
    import { Injectable } from '@angular/core';
    import { CanActivate, Router } from '@angular/router';

    @Injectable({ providedIn: 'root' })
    export class LazyGuard implements CanActivate {
      constructor(private router: Router) {}

      canActivate(): boolean {
        const isAuthenticated = this.checkAuthentication();
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
        }
        return isAuthenticated;
      }

      checkAuthentication(): boolean {
        // Simulación de autenticación
        return Math.random() > 0.5;
      }
    }
  `;

  routeCode = `
    import { Routes } from '@angular/router';

    export const routes: Routes = [
      {
        path: 'protected',
        canActivate: [() => import('./lazy-guard').then(m => m.LazyGuard)],
        loadComponent: () =>
          import('./protected/protected.component').then(m => m.ProtectedComponent),
      },
    ];
  `;
}
