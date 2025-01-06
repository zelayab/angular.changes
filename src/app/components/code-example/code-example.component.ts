import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'code-example',
  template: `
    <div class="code-container">
      <pre><code class="language-html" [highlightAuto]="code" lineNumbers></code></pre>
    </div>
  `,
  standalone: true,
  imports: [HighlightAuto, CommonModule],
  styles: [
    `
      .code-container {
        background-color: #282c34;
        border-radius: 8px;
        padding: 16px;
        overflow: auto;
        color: #f8f8f2;
        font-family: 'Fira Code', monospace;
        font-size: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      pre {
        margin: 0;
      }
      code {
        display: block;
      }
    `,
  ],
})
export class CodeExampleComponent {
  @Input() code = '';
}
