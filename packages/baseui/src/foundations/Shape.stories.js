import { h, Fragment } from '../react.js';
import { useTokens, section, Block, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Shape',
  parameters: { docs: { description: { component: 'Recommended corner radii, named by pixel value.' } } },
};

export function page() {
  const s = section('Radius', useTokens());
  if (!s) return h(Loading);
  const tokens = s.groups[0].tokens;
  return h(Fragment, null,
    h(Block, { title: 'Radius Scale' },
      h('div', { className: 'shape-grid' }, tokens.map((t) => h('figure', { key: t.name, className: 'shape-item' },
        h('div', { className: 'shape-box', style: { borderRadius: t.value } }),
        h('figcaption', null, h('code', null, t.name.replace('radius-', '')), h('span', null, t.value))))),
      h(TokenTable, { tokens })),
    h(Block, { title: 'Concentric Radius' },
      h('p', { className: 'doc-p' }, 'Inner radius = outer radius − padding.'),
      h('div', { className: 'concentric' }, h('div', { className: 'concentric-outer' }, h('div', { className: 'concentric-inner' }, '24 − 8 = 16')))));
}
export const __namedExportsOrder = [];
