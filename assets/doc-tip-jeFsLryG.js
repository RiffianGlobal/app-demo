const e=`import { customElement, ThemeElement, html } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/tip'\r
\r
@customElement('doc-tip')\r
export class DocTip extends ThemeElement('') {\r
  override render() {\r
    return html\` <ui-tip>Hello world</ui-tip> \`\r
  }\r
}\r
`;export{e as default};
