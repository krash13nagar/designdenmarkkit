// Tabs.stories.ts|tsx
// Tabs.stories.ts|tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DenTabs } from './tabs.component';
import { DenTab } from '../tab/tab.component';

const meta: Meta<typeof DenTabs> = {
  component: DenTabs,
};

export default meta;
type Story = StoryObj<typeof DenTabs>;

export const Default: Story = {
  args: {
    value: 0,
    children:[React.createElement(DenTab, {label: "One",
    value: 0}), React.createElement(DenTab, {label: "Two",
    value: 1})]
  },
};
