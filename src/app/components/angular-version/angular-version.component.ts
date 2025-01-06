import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-angular-version',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './angular-version.component.html',
  styleUrls: ['./angular-version.component.scss'],
})

export class AngularVersionComponent {
  version: any;
  isDetailView = false;


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.isDetailView = !!params['exampleId'];
    });
  }

}
