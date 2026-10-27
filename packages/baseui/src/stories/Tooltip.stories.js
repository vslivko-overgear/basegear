import { h } from '../react.js';
import { Tooltip } from '../components/Tooltip.js';
import { Button } from './_ui.js';
import { meta, playground, example, Row } from './_helpers.js';

export default meta({
  title: 'Components/Tooltip', component: Tooltip, args: { content: 'Save changes', placement: 'top', delay: 300 },
  argTypes: { content: { control: 'text' }, placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] }, delay: { control: { type: 'range', min: 0, max: 1000, step: 100 } } },
});
export const Playground = { ...playground({ source: '{}' }), render: (args) => h('div', { style: { padding: '48px 96px' } }, h(Tooltip, args, h(Button, { variant: 'secondary' }, 'Hover me'))) };
export const Placements = example({
  name: 'Placements', render: () => h('div', { style: { padding: '48px 96px' } }, h(Row, null, ['top', 'bottom', 'left', 'right'].map((p) => h(Tooltip, { key: p, content: p, placement: p, delay: 0 }, h(Button, { variant: 'secondary', size: 'sm' }, p))))),
  source: `<Tooltip content="top" placement="top"><Button>top</Button></Tooltip>`,
});
export const __namedExportsOrder = ['Playground', 'Placements'];
