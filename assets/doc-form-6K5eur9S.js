const e=`import { customElement, ThemeElement, html, state, repeat } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/form/checkbox'\r
import '@riffian-web/ui/form/radio'\r
import '@riffian-web/ui/form/select'\r
\r
@customElement('doc-form')\r
export class DocForm extends ThemeElement('') {\r
  @state() checked = true\r
  @state() options = ['A', 'B', 'C', 'D']\r
  @state() selected = this.options[0]\r
\r
  get titledOptions() {\r
    return this.options.map((option, i) => ({ title: \`Option \${i + 1}\`, value: option }))\r
  }\r
  get titledSelected() {\r
    return this.titledOptions.find((option) => option.value === this.selected)\r
  }\r
\r
  onChange = (e: CustomEvent) => (this.checked = e.detail)\r
  onSelect = (e: CustomEvent) => (this.selected = e.detail.value ?? e.detail)\r
\r
  override render() {\r
    return html\`\r
      <!-- Checkbox -->\r
      <p class="flex w-full gap-4">\r
        Checkbox:\r
        <ui-checkbox .checked=\${this.checked} @change="\${this.onChange}">Checked: \${this.checked}</ui-checkbox>\r
        <ui-checkbox disabled checked>Disabled</ui-checkbox>\r
      </p>\r
      <!-- Radio -->\r
      <p class="mt-4 flex w-full items-center gap-4">\r
        Radio:\r
        \${repeat(\r
          this.options,\r
          (option, i) =>\r
            html\`<ui-radio .value=\${option} name="radio" .checked=\${option == this.selected} @change="\${this.onSelect}"\r
              >Option \${i + 1}</ui-radio\r
            >\`\r
        )}\r
      </p>\r
      <!-- Select -->\r
      <p class="mt-2 flex w-full items-center gap-2">\r
        Select:\r
        <ui-select .value=\${this.selected} .options=\${this.options} @change=\${this.onSelect}\r
          ><span slot="button">\${this.selected}</span></ui-select\r
        >\r
        <ui-select .value=\${this.selected} .options=\${this.titledOptions} @change=\${this.onSelect}\r
          ><span slot="button">\${this.titledSelected?.title}</span></ui-select\r
        >\r
      </p>\r
    \`\r
  }\r
}\r
`;export{e as default};
