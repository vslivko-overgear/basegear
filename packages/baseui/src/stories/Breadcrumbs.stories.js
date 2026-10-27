import { h } from '../react.js';
import { Breadcrumbs } from '../components/Breadcrumbs.js';
import { meta, playground, example } from './_helpers.js';

const items = [{ label: 'Home', href: '#' }, { label: 'Catalog', href: '#' }, { label: 'Audio', href: '#' }, { label: 'Headphones' }];
export default meta({ title: 'Components/Breadcrumbs', component: Breadcrumbs, args: { items } });
export const Playground = {
  ...playground({ source: `<Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Headphones' },
]} />` }),
  render: (args) => h(Breadcrumbs, args),
};
export const Item = example({
  name: 'Breadcrumb Item', render: () => h(Breadcrumbs, { items: [{ label: 'Link', href: '#' }, { label: 'Button', onClick: () => {} }, { label: 'Current' }] }),
  source: `<Breadcrumbs items={[{ label: 'Link', href: '/' }, { label: 'Button', onClick }, { label: 'Current' }]} />`,
});
export const __namedExportsOrder = ['Playground', 'Item'];
