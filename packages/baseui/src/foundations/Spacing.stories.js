import { h, Fragment } from '../react.js';
import { useTokens, section, Block, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Spacing',
  parameters: { docs: { description: { component: 'Recommended spacing values for padding, gap and margin, named by pixel value.' } } },
};

export function page() {
  const s = section('Spacing', useTokens());
  if (!s) return h(Loading);
  const tokens = s.groups[0].tokens;
  return h(Fragment, null,
    h(Block, { title: 'Scale' },
      h('div', { className: 'space-list' }, tokens.map((t) => h('div', { key: t.name, className: 'space-row' },
        h('code', null, `--baseui-${t.name}`),
        h('span', { className: 'space-bar-wrap' }, h('span', { className: 'tok-bar', style: { width: t.value === '0' ? 1 : t.value } })),
        h('span', { className: 'val' }, t.value)))),
      h(TokenTable, { tokens })));
}
export const __namedExportsOrder = [];
