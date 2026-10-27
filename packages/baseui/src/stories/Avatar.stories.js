import { h } from '../react.js';
import { Avatar, AvatarStatusDot } from '../components/Avatar.js';
import { meta, playground, example, Row, demoImage } from './_helpers.js';

export default meta({
  title: 'Components/Avatar', component: Avatar, args: { name: 'Anna Petrova', size: 'md', shape: 'circle' },
  argTypes: {
    name: { control: 'text' },
    size: { control: 'inline-radio', options: ['xsm', 'sm', 'md', 'lg', 'xl'] },
    shape: { control: 'inline-radio', options: ['circle', 'rounded', 'square'] },
  },
});
export const Playground = playground({ source: '{}' });
export const Image = example({
  name: 'Image', render: () => h(Row, null, h(Avatar, { name: 'Anna Petrova', src: demoImage('A') }), h(Avatar, { name: 'Mark Lee', src: 'broken.png', fallbackSrc: demoImage('M', 300) }), h(Avatar, { name: 'Sofia Rossi', src: 'broken.png' })),
  source: `<Avatar name="Anna Petrova" src={url} />
<Avatar name="Mark Lee" src={url} fallbackSrc={backup} />`,
});
export const Sizes = example({
  name: 'Sizes', render: () => h(Row, null, ['xsm', 'sm', 'md', 'lg', 'xl'].map((s) => h(Avatar, { key: s, name: 'Anna Petrova', size: s }))),
  source: `<Avatar name="Anna Petrova" size="lg" />`,
});
export const Shapes = example({
  name: 'Shapes', render: () => h(Row, null, ['circle', 'rounded', 'square'].map((s) => h(Avatar, { key: s, name: 'Anna Petrova', size: 'lg', shape: s }))),
  source: `<Avatar name="Anna Petrova" shape="rounded" />`,
});
export const Status = example({
  name: 'Status', render: () => h(Row, null, h(Avatar, { name: 'Anna Petrova', size: 'lg', status: h(AvatarStatusDot, { variant: 'success', label: 'Online' }) })),
  source: `<Avatar name="Anna Petrova" status={<AvatarStatusDot variant="success" label="Online" />} />`,
});
export const Interactive = example({
  name: 'Interactive', render: () => h(Row, null, h(Avatar, { name: 'Anna Petrova', href: '#', tooltip: 'Open profile' }), h(Avatar, { name: 'Mark Lee', onClick: () => {} })),
  source: `<Avatar name="Anna Petrova" href="/profile" />
<Avatar name="Mark Lee" onClick={open} />`,
});
export const __namedExportsOrder = ['Playground', 'Image', 'Sizes', 'Shapes', 'Status', 'Interactive'];
