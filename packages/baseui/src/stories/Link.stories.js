import { Link } from '../components/Link.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Link', component: Link, args: { href: '#', children: 'Read the guide', underline: 'hover', external: false },
  argTypes: { children: { control: 'text' }, underline: { control: 'inline-radio', options: ['hover', 'always', 'none'] }, external: { control: 'boolean' } },
});
export const Playground = playground({ source: `<Link href="/guide">Read the guide</Link>` });
export const __namedExportsOrder = ['Playground'];
