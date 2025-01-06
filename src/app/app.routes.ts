import { Routes } from '@angular/router';
import { ExampleDetailComponent } from './components/example-detail/example-detail.component';
import { ExampleListComponent } from './components/example-list/example-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'angular-19', pathMatch: 'full' },
  { path: ':version', component: ExampleListComponent },
  { path: ':version/:exampleId', component: ExampleDetailComponent },
];
