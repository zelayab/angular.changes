import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFiveComponent } from './examples/example-five/example-five.component';
import { ExampleFourComponent } from './examples/example-four/example-four.component';
import { ExampleOneComponent } from './examples/example-one/example-one.component';
import { ExampleSixComponent } from './examples/example-six/example-six.component';
import { ExampleThreeComponent } from './examples/example-three/example-three.component';
import { ExampleTwoComponent } from './examples/example-two/example-two.component';

const routes: Routes = [
  { path: 'example-1', component: ExampleOneComponent },
  { path: 'example-2', component: ExampleTwoComponent },
  { path: 'example-3', component: ExampleThreeComponent },
  { path: 'example-4', component: ExampleFourComponent },
  { path: 'example-5', component: ExampleFiveComponent },
  { path: 'example-6', component: ExampleSixComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angular19RoutingModule {}
