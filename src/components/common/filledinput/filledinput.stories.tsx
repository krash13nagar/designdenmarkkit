// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenFilledInput } from './filledinput.component';

const meta: Meta<typeof DenFilledInput> = {
  component: DenFilledInput,
};

export default meta;
type Story = StoryObj<typeof DenFilledInput>;

export const Primary: Story = {
  args: {
    defaultValue: 'primary',
  },
};
