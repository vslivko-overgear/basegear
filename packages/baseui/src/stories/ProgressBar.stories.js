import { h } from '../react.js';
import { ProgressBar } from '../components/ProgressBar.js';
import { meta, playground, example, Stack, W } from './_helpers.js';

export default meta({
  title: 'Components/Progress Bar', component: ProgressBar, args: { value: 60, size: 'md', label: 'Uploading', showValue: true },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 5 } }, size: { control: 'inline-radio', options: ['sm', 'md'] },
    label: { control: 'text' }, showValue: { control: 'boolean' },
  },
});
export const Playground = { ...playground({ source: '{}' }), render: (args) => W(360, h(ProgressBar, args)) };
export const Indeterminate = example({ name: 'Indeterminate', render: () => h(Stack, { width: 360 }, h(ProgressBar, { label: 'Processing…' }), h(ProgressBar, { size: 'sm' })), source: `<ProgressBar label="Processing…" />` });
export const __namedExportsOrder = ['Playground', 'Indeterminate'];
