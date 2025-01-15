import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-one',
  template: `
    <h3>Default Standalone Components </h3>

    <p><b>Antes (Versiones anteriores)</b>:</p>
    <code-example [code]="codeExample"></code-example>


    <hr />

    <p><b>Ahora (Angular 19) con
    <code-example [code]="codeExample2"></code-example>
  `,
  styles: [`
    h3 { color: #2c3e50; }
    div { margin: 5px 0; }
    span { font-size: 1rem; }
    hr { margin: 20px 0; border: 1px solid #ddd; }
  `],
  standalone: true,
  imports: [CommonModule, CodeExampleComponent],
})
export class ExampleThreeComponent {

 codeExample = `
   /* antes stand-alone  component */
   @Component({
  standalone: true,
  selector: 'mi-componente',
  templateUrl: './mi-componente.html',
  imports: [CommonModule],
})
export class MiComponente { }

  `;

  codeExample2 = `
  @Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.html',
  imports: [CommonModule],
    })
  export class MiComponente { }
  `;

}


