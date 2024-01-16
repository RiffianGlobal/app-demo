const e=`import { customElement, ThemeElement, html, state } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/menu/drop'\r
\r
@customElement('doc-menu')\r
export class DocMenu extends ThemeElement('') {\r
  @state() menu = false\r
  closeMenu = () => {\r
    this.menu = false\r
  }\r
  override render() {\r
    return html\`\r
      <ui-drop\r
        .show=\${this.menu}\r
        @change=\${(e: CustomEvent) => (this.menu = e.detail)}\r
        btnText\r
        icon\r
        align="left"\r
        dropClass="w-72"\r
      >\r
        <span slot="button">Settings</span>\r
        <!-- Content -->\r
        <ul class="ui-option">\r
          <li @click="\${this.closeMenu}">Option A</li>\r
          <li @click="\${this.closeMenu}">Option B</li>\r
        </ul>\r
      </ui-drop>\r
    \`\r
  }\r
}\r
`;export{e as default};
