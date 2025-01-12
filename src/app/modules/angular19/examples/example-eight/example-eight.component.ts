import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-eight',
  template: `
    <h3>Example 8: Granular Rehydration</h3>

    <h4>¿Qué es?</h4>
    <p>
      La rehidratación granular permite que Angular restablezca solo partes específicas
      de la interfaz de usuario en aplicaciones SSR. Esto reduce la cantidad de trabajo
      necesario para iniciar una aplicación después de renderizarla en el servidor.
    </p>

    <h4>Diferencias entre SSR y CSR:</h4>
    <table>
      <thead>
        <tr>
          <th>Aspecto</th>
          <th>SSR (Server-Side Rendering)</th>
          <th>CSR (Client-Side Rendering)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Renderizado inicial</b></td>
          <td>El HTML se genera en el servidor y se envía completamente al cliente.</td>
          <td>El HTML se genera en el navegador después de cargar el JavaScript.</td>
        </tr>
        <tr>
          <td><b>Velocidad inicial</b></td>
          <td>Más rápido, ya que el cliente recibe HTML completo.</td>
          <td>Más lento, ya que el navegador necesita procesar el JavaScript antes de renderizar.</td>
        </tr>
        <tr>
          <td><b>SEO</b></td>
          <td>Mejor para motores de búsqueda, ya que el contenido es visible inmediatamente.</td>
          <td>Peor, ya que los bots pueden no esperar a que se genere el contenido dinámico.</td>
        </tr>
        <tr>
          <td><b>Rehidratación</b></td>
          <td>Requiere rehidratación para enlazar eventos y estados después del renderizado.</td>
          <td>No requiere rehidratación explícita, ya que todo ocurre en el cliente.</td>
        </tr>
        <tr>
          <td><b>Uso del servidor</b></td>
          <td>Mayor carga en el servidor debido al renderizado.</td>
          <td>Menor carga en el servidor, ya que el cliente hace la mayor parte del trabajo.</td>
        </tr>
        <tr>
          <td><b>Interactividad</b></td>
          <td>Puede requerir un tiempo adicional para enlazar los eventos del cliente.</td>
          <td>El estado y los eventos están listos una vez que el JavaScript se ejecuta.</td>
        </tr>
      </tbody>
    </table>

    <h4>Ejemplo Interactivo:</h4>
    <p>
      Este ejemplo simula una rehidratación granular utilizando un Signal para
      manejar el estado de carga en una sección específica.
    </p>
    <button (click)="toggleLoading()">Toggle Loading</button>
    <div *ngIf="!loading(); else loadingTemplate">
      <p>¡Contenido rehidratado exitosamente!</p>
    </div>
    <ng-template #loadingTemplate>
      <p>⏳ Cargando...</p>
    </ng-template>

    <h4>Código del Componente:</h4>
    <code-example [code]="codeExample"></code-example>
  `,
  styles: [`
    h3, h4 { color: #2c3e50; }
    p { font-size: 1rem; color: #333; }
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
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #ddd;
      text-align: left;
      padding: 8px;
    }
    th {
      background-color: #f4f4f4;
    }
    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  `],
  standalone: true,
  imports: [CodeExampleComponent, CommonModule],
})
export class ExampleEightComponent {
  loading = signal(false); // Signal para manejar el estado de carga

  codeExample = `
    import { Component, signal } from '@angular/core';

    @Component({
      selector: 'app-example-eight',
      template: \`
        <button (click)="toggleLoading()">Toggle Loading</button>
        <div *ngIf="!loading(); else loadingTemplate">
          <p>¡Contenido rehidratado exitosamente!</p>
        </div>
        <ng-template #loadingTemplate>
          <p>⏳ Cargando...</p>
        </ng-template>
      \`,
    })
    export class ExampleEightComponent {
      loading = signal(false);

      toggleLoading(): void {
        this.loading.update((value) => !value);
      }
    }
  `;

  toggleLoading(): void {
    this.loading.update((value) => !value);
  }
}
