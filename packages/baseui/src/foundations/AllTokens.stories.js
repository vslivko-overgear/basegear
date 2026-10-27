import { h, Fragment } from '../react.js';
import { useTokens, Block, TokenTable, colorPreview, Loading } from './_kit.js';

export default {
  title: 'Foundations/All Tokens',
  parameters: { docs: { description: { component: 'Every design token, read from tokens.css.' } } },
};

const PREVIEW = {
  Spacing: (t) => h('span', { className: 'tok-bar', style: { width: t.value === '0' ? 1 : t.value } }),
  Radius: (t) => h('span', { className: 'tok-radius', style: { borderRadius: t.value } }),
  Shadow: (t) => h('span', { className: 'tok-shadow', style: { boxShadow: t.value } }),
};

export function page() {
  const data = useTokens();
  if (!data) return h(Loading);
  return h(Fragment, null, data.map((s) => h(Block, { key: s.title, title: s.title, id: s.title.toLowerCase() },
    s.groups.map((g) => h(Fragment, { key: g.title },
      g.title && h('h3', null, g.title),
      h(TokenTable, { tokens: g.tokens, themed: s.themed, preview: s.themed ? colorPreview(s, 28) : PREVIEW[s.title], previewWidth: 96 }))))));
}
export const __namedExportsOrder = [];
