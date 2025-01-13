import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-one',
  template: `
    <h3>Control Flow Syntax</h3>

    <p><b>Antes (Angular 18 y versiones anteriores)</b>:</p>
    <div *ngFor="let item of items; let i = index">
      <span>{{ item.name }}</span>
      <span *ngIf="item.active; else inactive" style="color: green;">
        (Activo)
      </span>
      <ng-template #inactive>
        <span style="color: red;"> (Inactivo)</span>
      </ng-template>
    </div>

    <hr />

    <p><b>Ahora (Angular 19+ con
      <span style="color: red;">&#64;</span>for y
      for y &#64; if)</b>:</p>
    @for (item of items; track $index) {
      <div>
        <span>{{ item.name }}</span>
        @if (item.active) {
          <span style="color: green;"> (Activo)</span>
        }
        @else {
          <span style="color: red;"> (Inactivo)</span>
        }
      </div>
    }
    Code con Angular 19:
      <code-example [code]="codeExample"></code-example>
      <br>
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
export class ExampleOneComponent {


 codeExample = `
    @for (item of items; track $index) {
      <div>
        <span>{{ item.name }}</span>
        @if (item.active) {
          <span style="color: green;"> (Activo)</span>
        }
        @else {
          <span style="color: red;"> (Inactivo)</span>
        }
      </div>
    }
  `;
  items = [
    { name: 'Item 1', active: true },
    { name: 'Item 2', active: false },
    { name: 'Item 3', active: true },
    { name: 'Item 4', active: false },
  ];
}
