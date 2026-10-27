import { h } from '../react.js';
import { Center } from '../components/Layout.js';
import { meta, playground, Box } from './_helpers.js';

export default meta({ title: 'Components/Center', component: Center, args: {} });
export const Playground = { ...playground({ source: `<Center style={{ height: 160 }}>…</Center>` }), render: (args) => h(Center, { ...args, style: { height: 160, background: 'var(--baseui-Background-Secondary)', borderRadius: 'var(--baseui-radius-16)' } }, h(Box, { style: { background: 'var(--baseui-Extensions-Background-Surface)' } }, 'Centered')) };
export const __namedExportsOrder = ['Playground'];
