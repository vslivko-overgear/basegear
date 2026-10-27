import { h } from '../react.js';
import { Avatar, AvatarGroup, AvatarGroupOverflow } from '../components/Avatar.js';
import { meta, playground, example } from './_helpers.js';

export default meta({ title: 'Components/Avatar Group Overflow', component: AvatarGroupOverflow, args: { count: 3 }, argTypes: { count: { control: { type: 'range', min: 0, max: 120, step: 1 } } } });
export const Playground = {
  ...playground({ source: `<AvatarGroup><Avatar name="Anna Petrova" /><AvatarGroupOverflow count={3} /></AvatarGroup>` }),
  render: (args) => h(AvatarGroup, null, h(Avatar, { name: 'Anna Petrova' }), h(Avatar, { name: 'Mark Lee' }), h(AvatarGroupOverflow, args)),
};
export const Interactive = example({
  name: 'Interactive',
  render: () => h(AvatarGroup, null, h(Avatar, { name: 'Anna Petrova' }), h(Avatar, { name: 'Mark Lee' }), h(AvatarGroupOverflow, { count: 12, onClick: () => {} })),
  source: `<AvatarGroupOverflow count={12} onClick={showAll} />`,
});
export const __namedExportsOrder = ['Playground', 'Interactive'];
