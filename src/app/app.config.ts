import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HIGHLIGHT_OPTIONS, provideHighlightOptions } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Configuración del enrutador
    provideHttpClient(),   // Servicio HTTP
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
      themePath: 'assets/highlight.js/styles/atom-one-dark.css', // Ruta al tema oscuro
    }),
  ],
};
