import { Component, signal } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-five',
  template: `
    <h3>Zoneless Mode</h3>

    <h4>¿Qué es el Zoneless Mode?</h4>
    <p>
      El Zoneless Mode permite ejecutar una aplicación de Angular sin usar Zone.js.
      Esto es útil para aplicaciones de alto rendimiento que no necesitan detección automática de cambios.
    </p>
    <ul>
      <li>
        Se desactiva Zone.js en la configuración de la aplicación, lo que mejora el rendimiento.
      </li>
      <li>
        Es ideal para aplicaciones que gestionan manualmente la detección de cambios
        o usan bibliotecas como <b>RxJS</b> y <b>Signals</b>.
      </li>
      <li>
        Reduce la sobrecarga de procesamiento en aplicaciones grandes y complejas.
      </li>
      <li>
        Compatible con arquitecturas de micro frontends y casos de uso específicos.
      </li>
    </ul>

    <h4>Ventajas del Zoneless Mode:</h4>
    <ul>
      <li><b>Mayor rendimiento:</b> Evita la sobrecarga de Zone.js.</li>
      <li><b>Flexibilidad:</b> Control manual sobre la detección de cambios.</li>
      <li>
        <b>Compatibilidad con herramientas modernas:</b> Ideal para usar junto con Signals o bibliotecas reactivas como RxJS.
      </li>
      <li><b>Mejor modularidad:</b> Perfecto para aplicaciones de micro frontends.</li>
    </ul>

    <h4>Ejemplo de Zoneless con Signals:</h4>
    <div>
      <p>Contador: {{ counter() }}</p>
      <button (click)="increment()">Incrementar</button>
      <button (click)="decrement()">Decrementar</button>
    </div>

    <h4>Código del Componente:</h4>
    <code-example [code]="codeExample"></code-example>

    <h4>Configuración de Zoneless Mode en Angular:</h4>
    <p>
      Para ejecutar una aplicación Angular en modo Zoneless, se debe desactivar Zone.js en la configuración de la aplicación:
    </p>
    <code-example [code]="codeExample2"></code-example>

    <h4>¿Cuándo usar Zoneless Mode?</h4>
      <ul>
        <li>Aplicaciones de alto rendimiento que necesitan optimización avanzada.</li>
        <li>Casos donde la detección automática de cambios no aporta valor (e.g., bibliotecas externas, micro frontends).</li>
        <li>Escenarios que requieren una arquitectura completamente modular y control manual.</li>
      </ul>
  `,
  styles: [`
    h3, h4 { color: #2c3e50; }
    div {
      margin-top: 20px;
    }
    button {
      margin-right: 10px;
      padding: 5px 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    p, ul {
      font-size: 1rem;
      color: #333;
    }
  `],
  standalone: true,
  imports: [CodeExampleComponent],
})
export class ExampleFiveComponent {
  // Signals para manejar el estado de Zoneless Mode
  counter = signal(0);

  codeExample = `
    import { Component, signal } from '@angular/core';

    @Component({
      selector: 'app-example-five',
      template: \`
        <p>Contador: {{ counter() }}</p>
        <button (click)="increment()">Incrementar</button>
        <button (click)="decrement()">Decrementar</button>
      \`,
      standalone: true,
    })
    export class ExampleFiveComponent {
      counter = signal(0);

      increment(): void {
        this.counter.update((value) => value + 1);
      }

      decrement(): void {
        this.counter.update((value) => value - 1);
      }
    }
  `;

  codeExample2 = `
    import { bootstrapApplication } from '@angular/platform-browser';
    import { AppComponent } from './app/app.component';

    bootstrapApplication(AppComponent, {
      // Configuración sin Zone.js
      providers: [
        { provide: 'zone.js', useValue: null }, // Desactiva Zone.js
      ],
    });
  `;

  increment(): void {
    this.counter.update((value) => value + 1);
  }

  decrement(): void {
    this.counter.update((value) => value - 1);
  }
}
