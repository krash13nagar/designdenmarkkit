// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenOutlinedInput } from './outlinedinput.component';

const meta: Meta<typeof DenOutlinedInput> = {
  component: DenOutlinedInput,
};

export default meta;
type Story = StoryObj<typeof DenOutlinedInput>;

export const Primary: Story = {
  args: {
    label: 'primary',
  },
};
