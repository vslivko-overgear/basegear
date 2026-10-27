import { h } from '../react.js';
import { IconButton } from '../components/Button.js';
import { Heart, Settings02 } from './_ui.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Icon Button', component: IconButton, args: { label: 'Like', variant: 'secondary', size: 'md' },
  argTypes: { label: { control: 'text' }, variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'destructive'] }, size: { control: 'inline-radio', options: ['xsm', 'sm', 'md', 'lg'] } },
});
export const Playground = { ...playground({ source: `<IconButton icon={<HeartIcon />} label="Like" />` }), render: (args) => h(IconButton, { ...args, icon: h(Heart, { size: 20 }) }) };
export const Variants = example({
  name: 'Variants', render: () => h(Row, null, ['primary', 'secondary', 'ghost', 'destructive'].map((v) => h(IconButton, { key: v, variant: v, label: v, icon: h(Settings02, { size: 20 }) }))),
  source: `<IconButton variant="ghost" icon={<SettingsIcon />} label="Settings" />`,
});
export const __namedExportsOrder = ['Playground', 'Variants'];
