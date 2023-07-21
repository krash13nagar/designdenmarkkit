// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Count } from './wordcount.component';

const meta: Meta<typeof Count> = {
  component: Count,
};

export default meta;
type Story = StoryObj<typeof Count>;

export const Basic: Story = {
  args: {},
};
