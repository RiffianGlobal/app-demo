const n=`import { customElement, ThemeElement, html, state } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/pagination'\r
\r
@customElement('doc-pagination')\r
export class DocPagination extends ThemeElement('') {\r
  // Pagination\r
  @state() pending = false\r
  loaded = () => {\r
    this.pending = true\r
    console.log('load data')\r
    setTimeout(() => (this.pending = false), 200)\r
  }\r
\r
  override render() {\r
    return html\`\r
      <ui-pagination mode="click" .firstLoad=\${false} .pending=\${this.pending} @loadmore=\${this.loaded}\r
        ><span slot="empty">No data yet.</span>\r
      </ui-pagination>\r
    \`\r
  }\r
}\r
`;export{n as default};
