import { h, useState } from '../react.js';
import { AlertDialog } from '../components/AlertDialog.js';
import { Button } from './_ui.js';
import { meta, playground } from './_helpers.js';

export default meta({
  title: 'Components/Alert Dialog', component: AlertDialog, args: { title: 'Delete project?', description: 'This permanently removes the project and its files.', confirmLabel: 'Delete', cancelLabel: 'Cancel', destructive: true },
  argTypes: { title: { control: 'text' }, description: { control: 'text' }, destructive: { control: 'boolean' } },
});
function Demo(args) { const [open, setOpen] = useState(true); return h('div', null, !open && h(Button, { onClick: () => setOpen(true) }, 'Open'), h(AlertDialog, { ...args, open, onOpenChange: setOpen })); }
export const Playground = { ...playground({ source: `<AlertDialog open={open} onOpenChange={setOpen} title="Delete project?" description="…" destructive />` }), render: (args) => h(Demo, args) };
export const __namedExportsOrder = ['Playground'];
