import { Component, inject, ViewContainerRef } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-seven',
  template: `
    <h3>Example 7: Dynamic Component Creation</h3>

    <h4>¿Qué es?</h4>
    <p>
      Angular 19 simplifica la creación dinámica de componentes, lo que permite generar
      componentes sobre la marcha directamente en un <code>ViewContainerRef</code>.
    </p>

    <h4>Interacción:</h4>
    <button (click)="createComponent()">Crear Componente</button>
    <div #container></div>

    <h4>Código del Componente:</h4>
    <code-example [code]="codeExample"></code-example>
  `,
  styles: [`
    h3, h4 { color: #2c3e50; }
    button {
      margin-top: 10px;
      padding: 5px 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
    }
    button:hover {
      background-color: #0056b3;
    }
  `],
  standalone: true,
  imports: [CodeExampleComponent],
})
export class ExampleSevenComponent {
  private viewContainerRef = inject(ViewContainerRef);

  // Código del ejemplo para mostrar en pantalla
  codeExample = `
    import { Component, ViewContainerRef, inject } from '@angular/core';
    import { DynamicChildComponent } from './dynamic-child.component';

    @Component({
      selector: 'app-example-seven',
      template: \`
        <button (click)="createComponent()">Crear Componente</button>
        <div #container></div>
      \`,
    })
    export class ExampleSevenComponent {
      private viewContainerRef = inject(ViewContainerRef);

      createComponent() {
        this.viewContainerRef.clear();
        this.viewContainerRef.createComponent(DynamicChildComponent);
      }
    }
  `;

  createComponent() {
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(DynamicChildComponent);
  }
}

// Child Component
@Component({
  selector: 'app-dynamic-child',
  template: `<p>Este es un componente creado dinámicamente.</p>`,
  standalone: true,
})

export class DynamicChildComponent { }
