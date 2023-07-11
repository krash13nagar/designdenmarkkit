// nativeselect.stories.ts|tsx

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DenNativeSelect } from './nativeselect.component';

const meta: Meta<typeof DenNativeSelect> = {
  component: DenNativeSelect,
};

export default meta;
type Story = StoryObj<typeof DenNativeSelect>;

export const Default: Story = {
  args: {
    defaultValue: '30',
    children: <><option value={10}>Ten</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option></>
  },
};
