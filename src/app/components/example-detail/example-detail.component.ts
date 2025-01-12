import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleEightComponent } from '../../modules/angular19/examples/example-eight/example-eight.component';
import { ExampleElevenComponent } from '../../modules/angular19/examples/example-eleven/example-eleven.component';
import { ExampleFiveComponent } from '../../modules/angular19/examples/example-five/example-five.component';
import { ExampleFourComponent } from '../../modules/angular19/examples/example-four/example-four.component';
import { ExampleNineComponent } from '../../modules/angular19/examples/example-nine/example-nine.component';
import { ExampleOneComponent } from '../../modules/angular19/examples/example-one/example-one.component';
import { ExampleSevenComponent } from '../../modules/angular19/examples/example-seven/example-seven.component';
import { ExampleSixComponent } from '../../modules/angular19/examples/example-six/example-six.component';
import { ExampleTenComponent } from '../../modules/angular19/examples/example-ten/example-ten.component';
import { ExampleThirteenComponent } from '../../modules/angular19/examples/example-thirteen/example-thirteen.component';
import { ExampleThreeComponent } from '../../modules/angular19/examples/example-three/example-three.component';
import { ExampleTwelveComponent } from '../../modules/angular19/examples/example-twelve/example-twelve.component';
import { ExampleTwoComponent } from '../../modules/angular19/examples/example-two/example-two.component';

@Component({
  selector: 'app-example-detail',
  templateUrl: './example-detail.component.html',
  styleUrls: ['./example-detail.component.scss'],
})
export class ExampleDetailComponent implements OnInit {
  exampleId: string | null = null;

  @ViewChild('exampleContainer', { read: ViewContainerRef, static: true })
  exampleContainer!: ViewContainerRef;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.exampleId = params.get('exampleId');
      this.loadExample(this.exampleId);
    });
  }

  loadExample(id: string | null): void {
    this.exampleContainer.clear();

    let component: any;

    // Decide qué componente cargar dinámicamente
    switch (id) {
      case 'example-1':
        component = ExampleOneComponent;
        break;
      case 'example-2':
        component = ExampleTwoComponent;
        break;
      case 'example-3':
        component = ExampleThreeComponent;
        break;
      case 'example-4':
        component = ExampleFourComponent;
        break;
      case 'example-5':
        component = ExampleFiveComponent;
        break;
      case 'example-6':
        component = ExampleSixComponent;
        break;
      case 'example-7':
        component = ExampleSevenComponent;
        break;
      case 'example-8':
        component = ExampleEightComponent;
        break;
      case 'example-9':
        component = ExampleNineComponent;
        break;
      case 'example-10':
        component = ExampleTenComponent;
        break;
      case 'example-11':
        component = ExampleElevenComponent;
        break;
      case 'example-12':
        component = ExampleTwelveComponent;
        break;
      case 'example-13':
        component = ExampleThirteenComponent
        break;
      default:
        console.warn('Component not found for ID:', id);
        return;
    }

    // Crea el componente dinámicamente usando ViewContainerRef.createComponent()
    this.exampleContainer.createComponent(component);
  }

  goBack(): void {
    this.router.navigate(['/', this.route.snapshot.paramMap.get('version')]);
  }
}
