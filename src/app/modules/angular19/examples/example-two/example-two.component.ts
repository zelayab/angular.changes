import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-six',
  template: `
    <h3>Example 2: Deferred Loading</h3>

    <h4>¿Qué es el Deferred Loading?</h4>
    <p>
      El <b>Deferred Loading</b> permite cargar contenido de forma diferida cuando es necesario, como cuando el componente
      entra en el viewport, se cumple un tiempo definido, o se cumple una condición personalizada.
    </p>

    <h4>Ventajas del Deferred Loading:</h4>
    <ul>
      <li><b>Optimización:</b> Carga solo el contenido necesario, mejorando el rendimiento inicial.</li>
      <li><b>Condiciones personalizables:</b> Carga bajo demanda con eventos específicos (scroll, temporizador).</li>
      <li><b>Experiencia de usuario mejorada:</b> Ideal para aplicaciones con scroll infinito o dashboards complejos.</li>
    </ul>

    <h4>Ejemplo:</h4>
    <p>El contenido siguiente se cargará de forma diferida al hacer scroll hacia él:</p>

    <!-- Uso de @defer -->
    @defer (on viewport) {
      <div class="deferred-content">
        🎉 ¡Este contenido se cargó de manera diferida al entrar en el viewport!
      </div>
    } @placeholder {
      <div class="placeholder-content">
        ⏳ Cargando contenido...
      </div>
    }

    <h4>Código del Ejemplo:</h4>
    <code-example [code]="codeExample"></code-example>

    <h4>Casos de Uso:</h4>
    <ul>
      <li>Scroll infinito en aplicaciones.</li>
      <li>Optimización de dashboards con muchos gráficos o widgets.</li>
      <li>Carga diferida de imágenes o datos pesados.</li>
    </ul>
  `,
  styles: [`
    h3, h4 { color: #2c3e50; }
    .deferred-content {
      color: green;
      font-size: 1.2rem;
      margin-top: 20px;
    }
    .placeholder-content {
      color: gray;
      font-size: 1rem;
      margin-top: 20px;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
  `],
  standalone: true,
  imports: [CodeExampleComponent],
})
export class ExampleTwoComponent {
  codeExample = `
    @defer (on viewport) {
      <div class="deferred-content">
        🎉 ¡Este contenido se cargó de manera diferida al entrar en el viewport!
      </div>
    } @placeholder {
      <div class="placeholder-content">
        ⏳ Cargando contenido...
      </div>
    }
  `;
}
