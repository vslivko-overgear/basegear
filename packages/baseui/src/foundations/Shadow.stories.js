import { h, Fragment } from '../react.js';
import { useTokens, section, Block, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Shadow',
  parameters: { docs: { description: { component: 'Three shadow levels for raised surfaces.' } } },
};

export function page() {
  const s = section('Shadow', useTokens());
  if (!s) return h(Loading);
  const tokens = s.groups[0].tokens;
  return h(Fragment, null,
    h(Block, { title: 'Scale' },
      h('div', { className: 'shadow-grid' }, tokens.map((t) => h('figure', { key: t.name, className: 'shadow-item' },
        h('div', { className: 'shadow-box', style: { boxShadow: `var(--baseui-${t.name})` } }),
        h('figcaption', null, h('code', null, t.name))))),
      h(TokenTable, { tokens })));
}
export const __namedExportsOrder = [];
