import { h, useState } from '../react.js';
import { Select, Modal } from '../base.js';
import { Button, IconButton } from '../components/Button.js';
import { meta, example, Row } from './_helpers.js';
import { Settings02 } from './_ui.js';

const options = [{ value: 'name', label: 'Name' }, { value: 'date', label: 'Date' }, { value: 'size', label: 'Size' }];
const labelOf = (v) => (options.find((o) => o.value === v) || {}).label;

export default meta({ title: 'Components/Selector Trigger', component: Select, args: {}, argTypes: {}, description: 'The list can open from any element.' });

function IconDemo() {
  const [v, setV] = useState('name');
  return h(Row, null, h(Select, { trigger: h(IconButton, { variant: 'ghost', label: 'Sort by', icon: h(Settings02) }), options, value: v, onValueChange: setV, 'aria-label': 'Sort by' }), h('span', null, `Sorted by ${labelOf(v)}`));
}
function ButtonDemo() {
  const [v, setV] = useState('date');
  return h(Select, { trigger: h(Button, { variant: 'secondary' }, `Sort: ${labelOf(v)}`), options, value: v, onValueChange: setV });
}
function TextDemo() {
  const [v, setV] = useState('size');
  return h(Select, { trigger: `${labelOf(v)} ▾`, options, value: v, onValueChange: setV });
}
function DialogDemo() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [v, setV] = useState('name');
  return h('div', null,
    h(Button, { onClick: () => setA(true) }, 'Open dialog'),
    h(Modal, { open: a, onOpenChange: setA, title: 'Sort and filter', primaryAction: h(Button, { onClick: () => setA(false) }, 'Done'), secondaryAction: h(Button, { variant: 'secondary', onClick: () => setB(true) }, 'More options') },
      h('div', { style: { display: 'grid', gap: 12, paddingTop: 8 } }, h(Select, { label: 'Sort by', options, value: v, onValueChange: setV }))),
    h(Modal, { open: b, onOpenChange: setB, title: 'More options', primaryAction: h(Button, { onClick: () => setB(false) }, 'Close') }, 'Dialogs stack: Escape or Close dismisses this one first.'));
}
export const IconTrigger = example({ name: 'Icon Trigger', render: () => h(IconDemo), source: `<Select trigger={<IconButton label="Sort by" icon={<Settings02 />} />} options={options} value={v} onValueChange={setV} />` });
export const ButtonTrigger = example({ name: 'Button Trigger', render: () => h(ButtonDemo), source: `<Select trigger={<Button variant="secondary">Sort: Date</Button>} options={options} value={v} onValueChange={setV} />` });
export const TextTrigger = example({ name: 'Text Trigger', render: () => h(TextDemo), source: `<Select trigger="Size ▾" options={options} value={v} onValueChange={setV} />` });
export const InDialog = example({ name: 'In a Dialog', render: () => h(DialogDemo), source: `<Modal open={open} …><Select label="Sort by" options={options} /></Modal>  // the list opens above the dialog` });
export const __namedExportsOrder = ['IconTrigger', 'ButtonTrigger', 'TextTrigger', 'InDialog'];
