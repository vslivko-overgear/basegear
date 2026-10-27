import { h } from '../react.js';
import { Slider } from '../components/Slider.js';
import { meta, playground, W } from './_helpers.js';

export default meta({
  title: 'Components/Slider', component: Slider, args: { defaultValue: 40, min: 0, max: 100, step: 5, label: 'Volume', showValue: true, disabled: false },
  argTypes: { label: { control: 'text' }, step: { control: 'inline-radio', options: [1, 5, 10] }, showValue: { control: 'boolean' }, disabled: { control: 'boolean' } },
});
export const Playground = { ...playground({ source: `<Slider label="Volume" defaultValue={40} step={5} showValue />` }), render: (args) => W(360, h(Slider, args)) };
export const __namedExportsOrder = ['Playground'];
