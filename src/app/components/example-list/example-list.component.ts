import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-example-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss'],
})
export class ExampleListComponent {
  version: string | undefined;
  examples: Array<{ id: string; title: string }> = [];

  constructor(private route: ActivatedRoute, private versionService: VersionService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.version = params['version'];
      this.loadExamples();
    });
  }

  loadExamples(): void {
    this.versionService.getVersions().subscribe((versions) => {
      const versionData = versions.find((v:any) => v.version === this.version);
      this.examples = versionData ? versionData.examples : [];
    });
  }
}
