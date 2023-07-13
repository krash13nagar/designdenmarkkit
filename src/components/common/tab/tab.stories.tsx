// Tab.stories.ts|tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DenTab } from './tab.component';

const meta: Meta<typeof DenTab> = {
  component: DenTab,
};

export default meta;
type Story = StoryObj<typeof DenTab>;

export const Default: Story = {
  args: {
    value: 0,
    label: 'Item One'
  },
};
