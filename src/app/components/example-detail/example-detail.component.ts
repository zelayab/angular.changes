import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExampleOneComponent } from '../../modules/angular19/examples/example-one/example-one.component';
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
