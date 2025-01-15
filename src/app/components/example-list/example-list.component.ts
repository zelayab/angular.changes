import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LinkService } from '../../services/link.service';
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
  officialDocs: Array<{ title: string; url: string }> = [];
  relevantArticles: Array<{ title: string; url: string }> = [];
  cheatsheet: Array<{ title: string; url: string }> = [];

  constructor(private route: ActivatedRoute, private versionService: VersionService, private linkService: LinkService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.version = params['version'];
      this.loadExamples();
    });

    this.linkService.getLinks().subscribe((data) => {
      this.officialDocs = data.officialDocs;
      this.relevantArticles = data.relevantArticles;
      this.cheatsheet = data.cheatsheet;
    });

  }

  loadExamples(): void {
    this.versionService.getVersions().subscribe((versions) => {
      const versionData = versions.find((v:any) => v.version === this.version);
      this.examples = versionData ? versionData.examples : [];
    });
  }
}
