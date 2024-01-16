const e=`import { customElement, ThemeElement, html } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/loading/icon'\r
import '@riffian-web/ui/loading/skeleton'\r
\r
@customElement('doc-loading')\r
export class DocLoading extends ThemeElement('') {\r
  override render() {\r
    return html\`\r
      <div class="flex gap-4">\r
        <loading-icon></loading-icon>\r
        <loading-skeleton num="3"></loading-skeleton>\r
      </div>\r
    \`\r
  }\r
}\r
`;export{e as default};
