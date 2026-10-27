import { h } from '../react.js';
import { Avatar, AvatarStatusDot } from '../components/Avatar.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Avatar Status Dot', component: AvatarStatusDot, args: { variant: 'success', label: 'Online' },
  argTypes: { variant: { control: 'inline-radio', options: ['success', 'neutral', 'error'] }, label: { control: 'text' } },
});
export const Playground = { ...playground({ source: `<Avatar name="Anna Petrova" size="lg" status={<AvatarStatusDot variant="success" label="Online" />} />` }), render: (args) => h(Avatar, { name: 'Anna Petrova', size: 'lg', status: h(AvatarStatusDot, args) }) };
export const Sizes = example({
  name: 'Sizes', render: () => h(Row, { gap: 24 }, [24, 36, 48, 96].map((s) => h(Avatar, { key: s, name: 'Anna Petrova', size: s, status: h(AvatarStatusDot, { variant: 'success', label: 'Online' }) }))),
  source: `<Avatar name="Anna Petrova" size={96} status={<AvatarStatusDot variant="success" label="Online" />} />`,
});
export const Variants = example({
  name: 'Variants', render: () => h(Row, { gap: 24 }, [['success', 'Online'], ['neutral', 'Away'], ['error', 'Busy']].map(([v, l]) => h(Avatar, { key: v, name: 'Anna Petrova', size: 'lg', status: h(AvatarStatusDot, { variant: v, label: l }) }))),
  source: `<AvatarStatusDot variant="neutral" label="Away" />`,
});
export const __namedExportsOrder = ['Playground', 'Sizes', 'Variants'];
