import { h } from '../react.js';
import { Grid } from '../components/Layout.js';
import { meta, playground, Box } from './_helpers.js';

export default meta({
  title: 'Components/Grid', component: Grid, args: { columns: 3, gap: 12 },
  argTypes: { columns: { control: 'inline-radio', options: [1, 2, 3, 4] }, gap: { control: 'inline-radio', options: [0, 4, 8, 12, 16, 24] } },
});
export const Playground = { ...playground({ source: `<Grid columns={3} gap={12}>…</Grid>` }), render: (args) => h(Grid, args, Array.from({ length: 6 }, (_, i) => h(Box, { key: i }, i + 1))) };
export const __namedExportsOrder = ['Playground'];
