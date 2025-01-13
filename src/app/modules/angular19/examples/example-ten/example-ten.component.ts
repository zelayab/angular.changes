import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';


@Component({
  selector: 'app-example-ten',
  template: `
    <h3>Optimized Dependency Injection</h3>

    <h4>¿Qué es la Inyección de Dependencias Optimizada?</h4>
    <p>
      Angular 19 permite cargar dependencias de forma diferida para mejorar el rendimiento.
      Esto significa que los servicios solo se inicializan cuando se usan por primera vez.
    </p>

    <h4>Ventajas:</h4>
    <ul>
      <li>Reduce el tiempo de carga inicial de la aplicación.</li>
      <li>Evita instanciar servicios innecesarios.</li>
      <li>Mejora el rendimiento general, especialmente en aplicaciones grandes.</li>
    </ul>

    <h4>Ejemplo Interactivo:</h4>
    <button (click)="fetchData()">Fetch Data</button>
    <div *ngIf="data">
      <h4>Fetched Data:</h4>
      <pre>{{ data | json }}</pre>
    </div>

    <h4>Código del Componente:</h4>
    <code-example [code]="codeExample"></code-example>
  `,
  styles: [`
    h3, h4 { color: #2c3e50; }
    button {
      margin: 10px 0;
      padding: 5px 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 4px;
    }
  `],
  standalone: true,
  imports: [HttpClientModule, CodeExampleComponent, JsonPipe, CommonModule],
})
export class ExampleTenComponent {
  private http = inject(HttpClient); // Uso del nuevo método `inject`
  data: any;

  codeExample = `
    import { Component, inject } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    @Component({
      selector: 'app-example-ten',
      template: \`
        <button (click)="fetchData()">Fetch Data</button>
        <div *ngIf="data">
          <h4>Datos Obtenidos:</h4>
          <pre>{{ data | json }}</pre>
        </div>
      \`,
      standalone: true,
    })
    export class ExampleTenComponent {
      private http = inject(HttpClient); // Inyección optimizada
      data: any;

      fetchData(): void {
        this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response) => {
          this.data = response;
        });
      }
    }
  `;

  fetchData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response) => {
      this.data = response;
    });
  }
}
