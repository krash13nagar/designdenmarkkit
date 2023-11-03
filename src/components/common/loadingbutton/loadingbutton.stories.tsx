// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenLoadingButton } from './loadingbutton.component';
import React from 'react';

const meta: Meta<typeof DenLoadingButton> = {
  component: DenLoadingButton,
};

export default meta;
type Story = StoryObj<typeof DenLoadingButton>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: React.createElement('span', {}, 'Loading'),
    loading: true,
    loadingPosition: 'start',
  },
};
