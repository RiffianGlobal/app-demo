const e=`import { customElement, ThemeElement, html, state } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/address'\r
\r
@customElement('doc-address')\r
export class DocAddress extends ThemeElement('') {\r
  @state() address = '0x82487df5b4cf19db597a092c8103759466be9e5a'\r
  override render() {\r
    return html\`\r
      <p class="flex w-full space-x-8">\r
        <ui-address .address="\${this.address}" short href="https://riffian.web"></ui-address>\r
        <ui-address .address="\${this.address}" short avatar></ui-address>\r
        <ui-address .address="\${this.address}" short avatar copy></ui-address>\r
      </p>\r
    \`\r
  }\r
}\r
`;export{e as default};
