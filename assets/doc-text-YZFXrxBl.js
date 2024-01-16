const t=`import { customElement, ThemeElement, html, when, state } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/input/text'\r
import '@riffian-web/ui/input/pwd'\r
\r
@customElement('doc-text')\r
export class DocText extends ThemeElement('') {\r
  @state() inputPwd = ''\r
  @state() inputText = ''\r
  @state() inputTextErr = ''\r
  @state() pending = false\r
  async onInputText(e: CustomEvent) {\r
    this.inputText = e.detail\r
    this.inputTextErr = ''\r
    const len = this.inputText.length\r
    if (len && len < 4) {\r
      this.inputTextErr = 'Your input is too short'\r
    }\r
  }\r
\r
  override render() {\r
    return html\`\r
      <div class="flex gap-8 items-center">\r
        <ui-input-text\r
          @input=\${this.onInputText}\r
          value=\${this.inputText}\r
          placeholder="Enter your album name"\r
          required\r
          ?disabled=\${this.pending}\r
        >\r
          <span slot="label">Album Name</span>\r
          <span slot="tip">\r
            <ui-link href="/help">How to?</ui-link>\r
          </span>\r
          <span slot="right" class="-mr-1">\r
            <ui-button @click="()=>{}" icon class="text-blue-500"><i class="mdi mdi-magnify"></i></ui-button>\r
          </span>\r
          <span slot="msg">\r
            \${when(this.inputTextErr, () => html\`<span class="text-red-500">\${this.inputTextErr}</span>\`)}\r
          </span>\r
        </ui-input-text>\r
        <span>Your name is: \${when(!this.inputTextErr, () => html\`<b>\${this.inputText}</b>\`)}</span>\r
      </div>\r
      <!-- Simple TextField -->\r
      <div class="flex flex-col gap-4 w-72">\r
        <ui-input-text\r
          sm\r
          @input=\${this.onInputText}\r
          value=\${this.inputText}\r
          placeholder="Enter your album name"\r
          required\r
          ?disabled=\${this.pending}\r
        >\r
          <span slot="right">\r
            <i class="mdi mdi-account-outline"></i>\r
          </span>\r
        </ui-input-text>\r
        <!-- Simple Password -->\r
        <ui-input-pwd sm value=\${this.inputPwd} placeholder="Enter your password" required ?disabled=\${this.pending}>\r
        </ui-input-pwd>\r
      </div>\r
    \`\r
  }\r
}\r
`;export{t as default};
