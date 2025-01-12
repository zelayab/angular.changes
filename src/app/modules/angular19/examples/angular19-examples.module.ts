import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleFiveComponent } from './example-five/example-five.component';
import { ExampleFourComponent } from './example-four/example-four.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleSixComponent } from './example-six/example-six.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { ExampleTwoComponent } from './example-two/example-two.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    ExampleFourComponent,
    ExampleFiveComponent,
    ExampleSixComponent

  ],
  exports: [
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    ExampleFourComponent,
    ExampleFiveComponent,
    ExampleSixComponent
  ]
})
export class Angular19ExamplesModule {}
