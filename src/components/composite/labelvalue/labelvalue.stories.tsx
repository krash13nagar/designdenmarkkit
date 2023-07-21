// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { LabelValue } from './labelvalue.component';
import React from 'react';
import { AlingType } from './labelvalue.types';

const meta: Meta<typeof LabelValue> = {
  component: LabelValue,
};

export default meta;
type Story = StoryObj<typeof LabelValue>;

export const Basic: Story = {
  args: {
    label: 'Basic',
    value: 'value',
    align: AlingType.column,
    seperator: ':',
    renderValue: () => {
      return (
        <div>
          <span>test1</span>
          <span>test2</span>
          <span>test13</span>
        </div>
      );
    },
  },
};
