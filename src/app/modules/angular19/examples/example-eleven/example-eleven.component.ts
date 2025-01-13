import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';



@Component({
  selector: 'app-example-router-debugging',
  template: `
    <h3>Router Debugging API</h3>

    <h4>¿Qué es el Router Debugging API?</h4>
    <p>
      Angular 19 introduce la capacidad de inspeccionar las configuraciones de rutas directamente desde el router.
      Esto es particularmente útil para aplicaciones con rutas complejas o dinámicas.
    </p>

    <h4>Beneficios de esta API:</h4>
    <ul>
      <li>
        <b>Inspección de rutas:</b> Muestra una representación detallada de las rutas registradas en la aplicación.
      </li>
      <li>
        <b>Identificación de problemas:</b> Ayuda a detectar rutas mal configuradas o conflictos.
      </li>
      <li>
        <b>Herramienta de aprendizaje:</b> Es ideal para entender cómo funciona el enrutamiento en Angular.
      </li>
    </ul>

    <h4>Ejemplo Interactivo:</h4>
    <p>Haga clic en el botón para inspeccionar las rutas registradas:</p>
    <button (click)="logRoutes()">Inspeccionar Rutas</button>
    <pre>{{ routesDebug | json }}</pre>

    <h4>Código del Componente:</h4>
    <code-example [code]="codeExample"></code-example>

    <h4>¿Qué cambia con Angular 19?</h4>
    <p>
      Antes, no había una forma directa de inspeccionar las rutas registradas en la aplicación.
      Ahora, con el Router Debugging API, puedes obtener esta información fácilmente con un método nativo.
    </p>
  `,
  styles: [`
    h3, h4 { color: #2c3e50; }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    p {
      font-size: 1rem;
      color: #333;
    }
    button {
      margin: 10px 0;
      padding: 10px 15px;
      font-size: 1rem;
      color: #fff;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    pre {
      background-color: #f8f9fa;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow-x: auto;
    }
  `],
  standalone: true,
  imports: [CodeExampleComponent, CommonModule],
})
export class ExampleElevenComponent {
  routesDebug: any = null;

  codeExample = `
    import { Component } from '@angular/core';
    import { Router } from '@angular/router';

    @Component({
      selector: 'app-example-router-debugging',
      template: \`
        <button (click)="logRoutes()">Inspeccionar Rutas</button>
        <pre>{{ routesDebug | json }}</pre>
      \`,
      standalone: true,
    })
    export class ExampleRouterDebuggingComponent {
      routesDebug: any = null;

      constructor(private router: Router) {}

      logRoutes(): void {
        // Inspección de rutas registradas
        this.routesDebug = this.router.config;
        console.log('Rutas registradas:', this.routesDebug);
      }
    }
  `;

  constructor(private router: Router) {}

  logRoutes(): void {
    // Inspección de rutas registradas
    this.routesDebug = this.router.config;
    console.log('Rutas registradas:', this.routesDebug);
  }
}
