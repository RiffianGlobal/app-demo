const n=`import { customElement, ThemeElement, html, when, state } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/dialog'\r
import '@riffian-web/ui/dialog/prompt'\r
import '@riffian-web/ui/dialog/confirm'\r
\r
@customElement('doc-dialog')\r
export class DocDialog extends ThemeElement('') {\r
  @state() dialog = false\r
  @state() prompt = false\r
  @state() confirm = false\r
  @state() confirmed = false\r
  onConfirm = () => {\r
    this.confirmed = true\r
    this.confirm = false\r
  }\r
  override render() {\r
    return html\`\r
      <p class="flex w-full gap-2 my-2 items-center">\r
        <ui-button sm @click=\${() => (this.dialog = true)}>Simple Dialog</ui-button>\r
        <ui-button sm @click=\${() => (this.prompt = true)}>Prompt</ui-button>\r
        <ui-button sm @click=\${() => (this.confirm = true)}>Confirm</ui-button> Confirmed: \${this.confirmed}\r
      </p>\r
      <!-- Simple Dialog -->\r
      \${when(\r
        this.dialog,\r
        () => html\`\r
          <ui-dialog @close=\${() => (this.dialog = false)}\r
            ><p slot="header">Title</p>\r
            Content\r
            <p slot="footer">Footer</p></ui-dialog\r
          >\r
        \`\r
      )}\r
      <!-- Prompt -->\r
      \${when(\r
        this.prompt,\r
        () => html\`\r
          <ui-prompt button @close=\${() => (this.prompt = false)}\r
            ><div class="text-base">Some Message here</div></ui-prompt\r
          >\r
        \`\r
      )}\r
      <!-- Confirm -->\r
      \${when(\r
        this.confirm,\r
        () => html\`\r
          <ui-confirm button @close=\${() => (this.confirm = false)} @confirm=\${this.onConfirm}\r
            ><div slot="header">Use location service?</div>\r
            <div class="text-base">\r
              Let us help apps determine location. This means sending anonymouse location data to use.\r
            </div></ui-confirm\r
          >\r
        \`\r
      )}\r
    \`\r
  }\r
}\r
`;export{n as default};
