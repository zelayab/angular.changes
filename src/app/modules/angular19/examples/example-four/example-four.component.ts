import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-four',
  template: `
    <h3>Standalone Reactive Forms</h3>

    <h4>Código del Componente:</h4>

    <h4>¿Qué son los Standalone Reactive Forms?</h4>
    <p>
      Los Standalone Reactive Forms permiten crear y gestionar formularios reactivos de forma independiente,
      sin depender de un módulo global como <code>ReactiveFormsModule</code>. Esto hace que los componentes
      sean más modulares y reutilizables.
    </p>
    <ul>
      <li>Se utiliza <b>standalone: true</b> para declarar el componente independiente.</li>
      <li>Se importa <b>ReactiveFormsModule</b> directamente en el decorador del componente.</li>
      <li>El formulario se define usando <code>FormBuilder</code> y <code>FormGroup</code>.</li>
      <li>El formulario se envía con <code>(ngSubmit)="onSubmit()"</code>.</li>
    </ul>
    <h4> La diferencia con los formularios reactivos normales es que no se importa el módulo <code>ReactiveFormsModule</code> en el módulo principal, sino que se importa directamente en el componente.</h4>

    <p>
      Otra ventaja de los Standalone Reactive Forms es que se pueden usar en componentes que no necesitan el módulo de formularios reactivos en su totalidad.
      Ejemplo de esto son los componentes que solo necesitan un formulario simple para enviar datos.
    </p>


    <code-example [code]="codeExample"></code-example>


    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form-container">
      <input type="text" formControlName="name" placeholder="Nombre" />
      <input type="email" formControlName="email" placeholder="Email" />
      <button type="submit">Enviar</button>
    </form>


  `,
  styles: [`
    h3, h4 { color: #2c3e50; }
    form {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 300px;
    }
    input {
      padding: 8px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 10px;
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
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
  `],
  standalone: true,
  imports: [ReactiveFormsModule, CodeExampleComponent],
})
export class ExampleFourComponent {
  form: FormGroup;

  // Código que se muestra en el code-example
  codeExample = `
    import { Component } from '@angular/core';
    import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

    @Component({
      selector: 'app-example-four',
      template: \`
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <input type="text" formControlName="name" placeholder="Nombre" />
          <input type="email" formControlName="email" placeholder="Email" />
          <button type="submit">Enviar</button>
        </form>
      \`,
      standalone: true,
      imports: [ReactiveFormsModule],
    })
    export class ExampleFourComponent {
      form: FormGroup;

      constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
          name: [''],
          email: [''],
        });
      }

      onSubmit(): void {
        console.log('Formulario enviado:', this.form.value);
      }
    }
  `;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  onSubmit(): void {
    console.log('Formulario enviado:', this.form.value);
  }
}
