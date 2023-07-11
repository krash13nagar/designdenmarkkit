// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenCardHeader } from './cardheader.component';

const meta: Meta<typeof DenCardHeader> = {
  component: DenCardHeader,
};

export default meta;
type Story = StoryObj<typeof DenCardHeader>;

export const Default: Story = {
  args: {
    title: 'header title',
  },
};
