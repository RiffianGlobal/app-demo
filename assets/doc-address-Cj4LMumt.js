const e=`import { customElement, ThemeElement, html, state } from '@riffian-web/ui/shared/theme-element'
// Components
import '@riffian-web/ui/address'

@customElement('doc-address')
export class DocAddress extends ThemeElement('') {
  @state() address = '0x82487df5b4cf19db597a092c8103759466be9e5a'
  override render() {
    return html\`
      <p class="flex w-full space-x-8">
        <ui-address .address="\${this.address}" short href="https://riffian.web"></ui-address>
        <ui-address .address="\${this.address}" short avatar></ui-address>
        <ui-address .address="\${this.address}" short avatar copy></ui-address>
      </p>
    \`
  }
}
`;export{e as default};
