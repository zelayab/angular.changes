import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

// Define la interfaz para el formulario estrictamente tipado
interface UserForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-example-nine',
  template: `
    <h3>Typed Reactive Forms</h3>

    <h4>¿Qué son los Formularios Estrictamente Tipados?</h4>
    <p>
      Los formularios estrictamente tipados introducen mayor seguridad y precisión al trabajar con formularios en Angular.
      Gracias al uso de tipos específicos, se eliminan errores comunes y se mejora la experiencia del desarrollador.
    </p>

    <h4>Diferencias entre Angular 18 y Angular 19:</h4>
    <table>
      <thead>
        <tr>
          <th>Angular 18</th>
          <th>Angular 19+</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            FormGroup no aplica tipos estrictos. Los valores son tratados como <b>any</b>, lo que puede ocasionar errores
            si no se valida correctamente.
          </td>
          <td>
            FormGroup utiliza tipos definidos mediante una interfaz o un objeto tipado.
            Esto garantiza que los valores del formulario se ajusten al tipo esperado.
          </td>
        </tr>
        <tr>
          <td>
            Validaciones pueden ser ambiguas, ya que el sistema no asegura que los controles
            coincidan con los valores esperados.
          </td>
          <td>
            Validaciones más precisas, con soporte completo para autocompletado y detección de errores
            en tiempo de compilación.
          </td>
        </tr>
      </tbody>
    </table>

    <h4>Formulario Interactivo:</h4>
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Nombre:</label>
        <input id="name" type="text" formControlName="name" placeholder="Nombre" />
        <span *ngIf="userForm.controls.name.invalid && userForm.controls.name.touched">
          <small style="color: red;">El nombre es obligatorio</small>
        </span>
      </div>

      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" formControlName="email" placeholder="Email" />
        <span *ngIf="userForm.controls.email.invalid && userForm.controls.email.touched">
          <small style="color: red;">Introduce un email válido</small>
        </span>
      </div>

      <div>
        <label for="password">Contraseña:</label>
        <input id="password" type="password" formControlName="password" placeholder="Contraseña" />
        <span *ngIf="userForm.controls.password.invalid && userForm.controls.password.touched">
          <small style="color: red;">La contraseña debe tener al menos 6 caracteres</small>
        </span>
      </div>

      <button type="submit" [disabled]="userForm.invalid">Enviar</button>
    </form>

    <h4>Código del Componente:</h4>
    <code-example [code]="codeExample"></code-example>
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
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    table, th, td {
      border: 1px solid #ddd;
    }
    th, td {
      padding: 10px;
      text-align: left;
    }
  `],
  standalone: true,
  imports: [ReactiveFormsModule, CodeExampleComponent, CommonModule],
})
export class ExampleNineComponent {
  userForm: FormGroup<UserForm>;

  // Código que se mostrará en el code-example
  codeExample = `
    import { Component } from '@angular/core';
    import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

    interface UserForm {
      name: FormControl<string>;
      email: FormControl<string>;
      password: FormControl<string>;
    }

    @Component({
      selector: 'app-example-nine',
      template: \`
        <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
          <input type="text" formControlName="name" placeholder="Nombre" />
          <input type="email" formControlName="email" placeholder="Email" />
          <input type="password" formControlName="password" placeholder="Contraseña" />
          <button type="submit" [disabled]="userForm.invalid">Enviar</button>
        </form>
      \`,
      standalone: true,
    })
    export class ExampleNineEnhancedComponent {
      userForm: FormGroup<UserForm>;

      constructor(private fb: FormBuilder) {
        this.userForm = this.fb.group({
          name: this.fb.control('', Validators.required),
          email: this.fb.control('', [Validators.required, Validators.email]),
          password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
        });
      }

      onSubmit(): void {
        console.log('Formulario enviado:', this.userForm.value);
      }
    }
  `;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(): void {
    console.log('Formulario enviado:', this.userForm.value);
  }
}
