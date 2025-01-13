import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes, // Rutas de la aplicación
      withHashLocation(), // Usa el modo de ubicación de hash
    ),
    provideHttpClient(),   // Servicio HTTP
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
      themePath: 'assets/highlight.js/styles/atom-one-dark.css', // Ruta al tema oscuro
    }),
    { provide: 'zone.js', useValue: null }, // Desactiva Zone.js

  ],
};
