// nativeselect.stories.ts|tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DenSelect } from './select.component';

const meta: Meta<typeof DenSelect> = {
  component: DenSelect,
};

export default meta;
type Story = StoryObj<typeof DenSelect>;

export const Default: Story = {
  args: {
    defaultValue: '20',
    children: <><option value={10}>Ten</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option></>
  },
};
