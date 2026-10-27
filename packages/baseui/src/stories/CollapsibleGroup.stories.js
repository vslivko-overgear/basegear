import { h } from '../react.js';
import { CollapsibleGroup } from '../components/Collapsible.js';
import { meta, playground, example, W } from './_helpers.js';

const items = [
  { value: 'a', title: 'How do I request a refund?', content: 'Open the order and choose “Return”. Money is back within 3 days.' },
  { value: 'b', title: 'How do I change my password?', content: 'Settings → Security → Change password.' },
  { value: 'c', title: 'Unavailable section', content: '—', disabled: true },
];
export default meta({ title: 'Components/Collapsible Group', component: CollapsibleGroup, args: { multiple: false, items, defaultValue: ['a'] }, argTypes: { multiple: { control: 'boolean' } } });
export const Playground = { ...playground({ source: '{}' }), render: (args) => W(480, h(CollapsibleGroup, { key: String(args.multiple), ...args })) };
export const Multiple = example({ name: 'Multiple', render: () => W(480, h(CollapsibleGroup, { multiple: true, defaultValue: ['a', 'b'], items })), source: `<CollapsibleGroup multiple defaultValue={['a', 'b']} items={items} />` });
export const __namedExportsOrder = ['Playground', 'Multiple'];
