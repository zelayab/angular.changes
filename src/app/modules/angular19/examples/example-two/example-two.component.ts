import { Component } from '@angular/core';

@Component({
  selector: 'app-example-two',
  template: `
    <h3>Example 2: Deferred Loading</h3>
    <p>
      <b>¿Qué es el Deferred Loading en Angular 19?</b><br />
      El Deferred Loading permite cargar componentes de manera diferida, solo cuando son
      necesarios. Esto mejora el rendimiento al evitar cargar componentes innecesarios hasta
      que se cumpla una condición.
    </p>
    <ul>
      <li>Se puede activar cuando el componente entra en el viewport (al hacer scroll).</li>
      <li>Se puede activar después de un tiempo definido (<b>timeout</b>).</li>
      <li>También se puede activar mediante otras condiciones específicas.</li>
    </ul>

    <p>
      En este ejemplo, el contenido se cargará de forma diferida cuando hagas scroll hacia él.
    </p>

    <!-- Uso de @defer para carga diferida -->
    @defer (on viewport) {
      <div class="deferred-content">
        🎉 ¡Este contenido se cargó de manera diferida!
      </div>
    } @placeholder {
      <div class="placeholder-content">
        ⏳ Cargando contenido...
      </div>
    }
  `,
  styles: [`
    h3 { color: #2c3e50; }
    p, ul {
      font-size: 1rem;
      color: #333;
    }
    .deferred-content {
      color: green;
      font-size: 1.2rem;
      margin-top: 10px;
    }
    .placeholder-content {
      color: gray;
      font-size: 1rem;
      margin-top: 10px;
    }
  `],
  standalone: true,
})
export class ExampleTwoComponent {}
