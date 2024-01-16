const e=`import { customElement, ThemeElement, html } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/img/loader'\r
\r
@customElement('doc-image')\r
export class DocImage extends ThemeElement('') {\r
  get img() {\r
    return \`https://cdn.mos.cms.futurecdn.net/4Vv43ekp8QVwL95So7Z8sb.jpg?\${new Date().getTime()}\`\r
  }\r
  override render() {\r
    return html\`\r
      <p class="w-36">\r
        <img-loader src=\${this.img} loading="lazy"></img-loader>\r
      </p>\r
    \`\r
  }\r
}\r
`;export{e as default};
