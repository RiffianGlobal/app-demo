const e=`import { customElement, ThemeElement, html, state } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/input/switch'\r
\r
@customElement('doc-switch')\r
export class DocSwitch extends ThemeElement('') {\r
  @state() val = false\r
  override render() {\r
    return html\`\r
      <p class="flex gap-1 items-center">\r
        <ui-input-switch .checked="val" @change="\${(e: CustomEvent) => (this.val = e.detail)}"></ui-input-switch>\r
        \${this.val}\r
      </p>\r
    \`\r
  }\r
}\r
`;export{e as default};
