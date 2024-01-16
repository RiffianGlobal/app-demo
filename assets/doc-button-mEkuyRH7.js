const t=`import { customElement, ThemeElement, html } from '@riffian-web/ui/shared/theme-element'\r
// Components\r
import '@riffian-web/ui/button'\r
\r
@customElement('doc-button')\r
export class DocButton extends ThemeElement('') {\r
  override render() {\r
    return html\`\r
      <p class="flex w-full items-center gap-2 my-2">\r
        <ui-button>Normal</ui-button>\r
        <ui-button disabled>Disabled</ui-button>\r
        <ui-button pending>Pending</ui-button>\r
        <ui-button sm>Small</ui-button>\r
        <ui-button sm dense>Dense</ui-button>\r
        <ui-button lg>Large</ui-button>\r
      </p>\r
      <p class="flex w-full items-center gap-2 my-2">\r
        <ui-button icon sm><i class="mdi mdi-check"></i></ui-button>\r
        <ui-button icon><i class="mdi mdi-check"></i></ui-button>\r
        <ui-button icon lg><i class="mdi mdi-check"></i></ui-button>\r
      </p>\r
      <p class="flex w-full items-center gap-2 my-2">\r
        <ui-button class="secondary">Secondary</ui-button>\r
        <ui-button class="minor">Minor</ui-button>\r
        <ui-button class="success">Success</ui-button>\r
        <ui-button class="outlined">Outlined</ui-button>\r
        <ui-button text>Text</ui-button>\r
        <ui-button href="">link with href</ui-button>\r
      </p>\r
      <p class="flex w-full items-center gap-2 my-2">\r
        <ui-button><i class="mdi mdi-check -ml-1 mr-1"></i>Icon Left</ui-button>\r
        <ui-button>Icon Right<i class="mdi mdi-check -mr-1 ml-1"></i></ui-button>\r
        <ui-button text><i class="mdi mdi-check -ml-1 mr-1"></i>Text</ui-button>\r
        <ui-button class="outlined" sm><i class="mdi mdi-check -ml-1 mr-1"></i>Outlined</ui-button>\r
      </p>\r
    \`\r
  }\r
}\r
`;export{t as default};
