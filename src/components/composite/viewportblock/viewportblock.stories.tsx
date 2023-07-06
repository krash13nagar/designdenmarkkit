// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ViewPortBlock } from './viewportblock.component';

const meta: Meta<typeof ViewPortBlock> = {
  component: ViewPortBlock,
};

export default meta;
type Story = StoryObj<typeof ViewPortBlock>;

export const Basic: Story = {
  args: {
    aspectRatio: '16/9',
    label: 'mobile',
  },
};
