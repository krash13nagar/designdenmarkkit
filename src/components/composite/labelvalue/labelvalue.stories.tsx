// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { LabelValue } from './labelvalue.component';

const meta: Meta<typeof LabelValue> = {
  component: LabelValue,
};

export default meta;
type Story = StoryObj<typeof LabelValue>;

export const Basic: Story = {
  args: {
    label: 'Basic',
    value: 'value',
    align: 'column',
    // valueProps: {
    //   style: {
    //     fontWeight: 700,
    //   },
    //   color: 'secondary',
    //   //   disabled: true,
    // },
    seperator: ':',
  },
};
