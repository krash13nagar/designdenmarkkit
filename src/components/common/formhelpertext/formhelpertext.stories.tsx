// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenFormHelperText } from './formhelpertext.component';

const meta: Meta<typeof DenFormHelperText> = {
  component: DenFormHelperText,
};

export default meta;
type Story = StoryObj<typeof DenFormHelperText>;

export const Primary: Story = {
  args: {
    variant: 'filled',
  },
};
