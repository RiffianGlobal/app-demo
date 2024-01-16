const e=`import { customElement, ThemeElement, html } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/link'\r
\r
@customElement('doc-link')\r
export class DocLink extends ThemeElement('') {\r
  override render() {\r
    return html\`\r
      <div class="flex w-full items-center gap-8">\r
        <p class="inline-flex gap-8">\r
          <ui-link href="/">Go Home</ui-link>\r
          <ui-link href="https://google.com" open>Google</ui-link>\r
          <ui-link href="/" back><i class="i mdi mdi-chevron-left"></i>Go Back</ui-link>\r
        </p>\r
        <p class="inline-flex items-center gap-2">\r
          <span>Navs:</span>\r
          <ui-link href="/docs" nav exact>/docs</ui-link>\r
          <ui-link href="/docs/button" nav exact>/docs/button</ui-link>\r
        </p>\r
      </div>\r
    \`\r
  }\r
}\r
`;export{e as default};
