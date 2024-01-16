const e=`import { customElement, ThemeElement, html } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/progress/ring'\r
import '@riffian-web/ui/progress/bar'\r
import '@riffian-web/ui/button'\r
import { toast } from '@riffian-web/ui/toast'\r
\r
@customElement('doc-toast')\r
export class DocToast extends ThemeElement('') {\r
  open = () => toast.add({ summary: 'Title', detail: 'Some reason' })\r
  override render() {\r
    return html\` <ui-button sm @click=\${this.open} class="mb-4">Open</ui-button> \`\r
  }\r
}\r
`;export{e as default};
