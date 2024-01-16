const r=`import { customElement, ThemeElement, html } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/progress/ring'\r
import '@riffian-web/ui/progress/bar'\r
\r
@customElement('doc-progress')\r
export class DocProgress extends ThemeElement('') {\r
  override render() {\r
    return html\`\r
      <div class="flex gap-8 items-center">\r
        <p class="w-12">\r
          <ui-progress-ring state .percent=\${66} .randomTo="100"><span class="text-xs">66%</span></ui-progress-ring>\r
        </p>\r
        <p class="w-12"><ui-progress-bar state .percent=\${80} .randomTo="100">2</ui-progress-bar></p>\r
        <p class="w-12"><ui-progress-bar .percent=\${40}></ui-progress-bar></p>\r
      </div>\r
    \`\r
  }\r
}\r
`;export{r as default};
