import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CodeExampleComponent } from '../../../../components/code-example/code-example.component';

@Component({
  selector: 'app-example-standalone-interceptors',
  template: `
    <h3>Example: Standalone HTTP Interceptors</h3>

    <h4>¿Qué son los Standalone HTTP Interceptors?</h4>
    <p>
      Los interceptores independientes en Angular 19 permiten agregar middleware HTTP a los servicios
      sin necesidad de un módulo global. Esto facilita la modularidad y reutilización.
    </p>

    <h4>Casos de Uso:</h4>
    <ul>
      <li><b>Autenticación:</b> Incluir tokens en las solicitudes HTTP.</li>
      <li><b>Gestión de errores global:</b> Manejar errores comunes como 401 o 500.</li>
      <li><b>Auditoría de tráfico:</b> Registrar detalles de las solicitudes y respuestas.</li>
    </ul>

    <h4>Ventajas:</h4>
    <ul>
      <li><b>Modularidad:</b> Se pueden usar interceptores específicos para ciertas partes de la aplicación.</li>
      <li><b>Simplicidad:</b> No requiere la configuración en AppModule.</li>
    </ul>

    <h4>Código del Interceptor:</h4>
    <code-example [code]="interceptorCode"></code-example>

    <h4>Código del Proveedor:</h4>
    <code-example [code]="providerCode"></code-example>
  `,
  styles: [`
    h3, h4 { color: #2c3e50; }
    ul { margin: 10px 0; padding-left: 20px; }
    p { font-size: 1rem; color: #333; }
  `],
  standalone: true,
  imports: [CodeExampleComponent, HttpClientModule],
})
export class ExampleThirteenComponent {
  interceptorCode = `
    import { Injectable } from '@angular/core';
    import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable()
    export class AuthInterceptor implements HttpInterceptor {
      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
          headers: req.headers.set('Authorization', 'Bearer token'),
        });
        return next.handle(clonedRequest);
      }
    }
  `;

  providerCode = `
    import { bootstrapApplication } from '@angular/platform-browser';
    import { AppComponent } from './app/app.component';
    import { AuthInterceptor } from './auth.interceptor';
    import { provideHttpClient, withInterceptors } from '@angular/common/http';

    bootstrapApplication(AppComponent, {
      providers: [
        provideHttpClient(withInterceptors([AuthInterceptor])),
      ],
    });
  `;
}
