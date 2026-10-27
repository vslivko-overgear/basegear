import { h } from '../react.js';
import { Stack, HStack, VStack } from '../components/Layout.js';
import { meta, playground, example, Box } from './_helpers.js';

export default meta({
  title: 'Components/Stack', component: Stack, args: { direction: 'column', gap: 12, align: undefined, justify: undefined, wrap: false },
  argTypes: {
    direction: { control: 'inline-radio', options: ['row', 'column'] },
    gap: { control: 'inline-radio', options: [0, 4, 8, 12, 16, 24, 32] },
    align: { control: 'inline-radio', options: [undefined, 'start', 'center', 'end', 'stretch'] },
    justify: { control: 'inline-radio', options: [undefined, 'start', 'center', 'end', 'between'] },
    wrap: { control: 'boolean' },
  },
});
const items = ['One', 'Two', 'Three'].map((t) => h(Box, { key: t }, t));
export const Playground = { ...playground({ source: '{}' }), render: (args) => h('div', { style: { width: 420, maxWidth: '100%' } }, h(Stack, args, items)) };
export const HorizontalStack = example({
  name: 'H Stack', render: () => h(HStack, { gap: 12 }, items),
  source: `<HStack gap={12}>…</HStack>`,
});
export const VerticalStack = example({
  name: 'V Stack', render: () => h('div', { style: { width: 240 } }, h(VStack, { gap: 8 }, items)),
  source: `<VStack gap={8}>…</VStack>`,
});
export const __namedExportsOrder = ['Playground', 'HorizontalStack', 'VerticalStack'];
