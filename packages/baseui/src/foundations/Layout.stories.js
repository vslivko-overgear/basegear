import { h, Fragment } from '../react.js';
import { useTokens, section, Block, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Layout',
  parameters: { docs: { description: { component: 'Page margins, container sizes and breakpoints: the numbers that lay out pages, dialogs and sheets.' } } },
};

const frame = (width, margin, label) => h('div', { className: 'layout-frame', style: { width } },
  h('div', { className: 'layout-frame__inner', style: { padding: margin } },
    h('div', { className: 'layout-frame__content' }, label)));

export function page() {
  const s = section('Layout', useTokens());
  if (!s) return h(Loading);
  // Non-themed sections are one flat list: the groups are told apart by token name.
  const all = s.groups.flatMap((g) => g.tokens);
  const group = (title) => all.filter((t) => (title === 'Margins' ? /-margin-/ : title === 'Breakpoints' ? /-breakpoint-/ : /-(height|width|max-width)$/).test(t.name));
  const value = (name) => all.find((t) => t.name === name)?.value;
  return h(Fragment, null,
    h(Block, { title: 'Margins' },
      h('p', { className: 'doc-p' }, 'The space between a screen edge and its content. Mobile screens, mobile sheets and the mobile preview use the mobile margin; wide screens and the desktop dialog use the desktop margin.'),
      h('div', { className: 'layout-frames' },
        frame(220, value('layout-margin-mobile'), `Mobile ${value('layout-margin-mobile')}`),
        frame(320, value('layout-margin-desktop'), `Desktop ${value('layout-margin-desktop')}`)),
      h(TokenTable, { tokens: group('Margins') })),
    h(Block, { title: 'Sizes' },
      h('p', { className: 'doc-p' }, 'Fixed dimensions of the page frame and of the dialog.'),
      h(TokenTable, { tokens: group('Sizes') })),
    h(Block, { title: 'Breakpoints' },
      h('p', { className: 'doc-p' }, 'Below the mobile breakpoint the sidebar becomes a catalog sheet and the settings column becomes a sheet. Below the sheet breakpoint a Dialog becomes a bottom sheet. Media queries cannot read variables, so these values are written out in the CSS.'),
      h(TokenTable, { tokens: group('Breakpoints') })));
}
export const __namedExportsOrder = [];
