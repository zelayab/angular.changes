import { Component, computed, signal } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-six',
  template: `
    <h3>Example 6: Signals en Angular</h3>

    <h4>¿Qué son los Signals?</h4>
    <p>
      Los <b>Signals</b> son un sistema de manejo de estado reactivo introducido en Angular 19.
      Proporcionan una forma declarativa y eficiente para manejar el estado, reduciendo la
      necesidad de detección de cambios tradicional y mejorando el rendimiento.
    </p>

    <h4>Ventajas de los Signals:</h4>
    <ul>
      <li>
        <b>Declarativos:</b> Los Signals actualizan automáticamente las vistas cuando su valor cambia.
      </li>
      <li>
        <b>Optimización de rendimiento:</b> Solo las partes del DOM que dependen de un Signal se actualizan.
      </li>
      <li>
        <b>Simplicidad:</b> Una API más simple que las herramientas tradicionales como RxJS.
      </li>
      <li>
        <b>Compatibilidad con Zoneless Mode:</b> Funcionan perfectamente sin Zone.js.
      </li>
    </ul>

    <h4>Ejemplo Interactivo:</h4>
    <div>
      <p>
        Este ejemplo demuestra cómo manejar el estado utilizando Signals y cómo se actualiza la vista automáticamente
        cuando cambian los valores.
      </p>
      <p><b>Nombre:</b> {{ name() }}</p>
      <input type="text" (input)="updateName($event)" [value]="name()" placeholder="Cambia el nombre aquí" />

      <p><b>Contador:</b> {{ counter() }}</p>
      <button (click)="increment()">Incrementar</button>
      <button (click)="decrement()">Decrementar</button>

      <p><b>Total acumulado:</b> {{ total() }}</p>
    </div>

    <h4>Código del Componente:</h4>
    <p>
      El código a continuación muestra cómo declarar y utilizar Signals en Angular. Observa que:
    </p>
      <ul>
        <li><b>name:</b> Es un Signal que almacena el valor del input en tiempo real.</li>
        <li><b>counter:</b> Maneja un contador reactivo.</li>
        <li><b>total:</b> Es un Signal calculado que siempre refleja el doble del valor de <code>counter</code>.</li>
      </ul>
    <code-example [code]="codeExample"></code-example>

    <h4>¿Cómo funciona el código?</h4>
    <p>
      1. Cuando escribes en el input, el método <code>updateName</code> actualiza el Signal <code>name</code>.
      Esto causa que Angular actualice automáticamente la vista donde se muestra <code>{{ name() }}</code>.
    </p>
    <p>
      2. Al presionar los botones de "Incrementar" o "Decrementar", el Signal <code>counter</code> se actualiza.
      La propiedad calculada <code>total</code> también se recalcula, y la vista se actualiza de forma reactiva.
    </p>

    <h4>¿Por qué usar Signals?</h4>
    <p>
      Signals permiten un manejo de estado más eficiente en Angular:
    </p>
    <ul>
      <li>
        <b>Reactividad automática:</b> Las vistas se actualizan automáticamente cuando el valor de un Signal cambia.
      </li>
      <li>
        <b>Menor sobrecarga:</b> Al no depender de Zone.js, se reduce la complejidad de detección de cambios.
      </li>
      <li>
        <b>Integración sencilla:</b> Pueden reemplazar soluciones complejas basadas en RxJS para casos simples.
      </li>
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
    input {
      margin: 10px 0;
      padding: 5px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    p {
      font-size: 1rem;
      color: #333;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
  `],
  standalone: true,
  imports: [CodeExampleComponent],
})
export class ExampleSixComponent {
  // Signals declarados
  name = signal('Angular'); // Signal que almacena un valor reactivo de texto
  counter = signal(0); // Signal para manejar el contador
  total = computed(() => this.counter() * 2); // Computed Signal que calcula el doble del contador

  // Código que se mostrará en el code-example
  codeExample = `
    import { Component, signal, computed } from '@angular/core';

    @Component({
      selector: 'app-example-six',
      template: \`
        <p><b>Nombre:</b> {{ name() }}</p>
        <input type="text" (input)="updateName($event)" [value]="name()" />

        <p><b>Contador:</b> {{ counter() }}</p>
        <button (click)="increment()">Incrementar</button>
        <button (click)="decrement()">Decrementar</button>

        <p><b>Total acumulado:</b> {{ total() }}</p>
      \`,
      standalone: true,
    })
    export class ExampleSixComponent {
      name = signal('Angular');
      counter = signal(0);
      total = computed(() => this.counter() * 2);

      updateName(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.name.set(input.value);
      }

      increment(): void {
        this.counter.update((value) => value + 1);
      }

      decrement(): void {
        this.counter.update((value) => value - 1);
      }
    }
  `;

  // Métodos para manejar eventos
  updateName(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }

  increment(): void {
    this.counter.update((value) => value + 1);
  }

  decrement(): void {
    this.counter.update((value) => value - 1);
  }
}
