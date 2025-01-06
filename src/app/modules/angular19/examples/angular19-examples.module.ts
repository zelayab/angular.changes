import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';

@NgModule({

  declarations:[],
  imports: [CommonModule,ExampleOneComponent, ExampleTwoComponent],
  exports: [ExampleOneComponent, ExampleTwoComponent]
})
export class Angular19ExamplesModule {}
