import { h, Fragment } from '../react.js';
import { useTokens, section, Block, colorPreview, TokenTable, Loading } from './_kit.js';

export default {
  title: 'Foundations/Color',
  parameters: { docs: { description: { component: 'Color tokens for text, backgrounds, borders and accents. Each has a light and a dark value.' } } },
};

export function page() {
  const color = section('Color', useTokens());
  if (!color) return h(Loading);
  return h(Fragment, null,
    color.groups.map((g) => h(Block, { key: g.title, title: g.title },
      h(TokenTable, { tokens: g.tokens, themed: true, preview: colorPreview(color), previewWidth: 120 }))));
}
export const __namedExportsOrder = [];
